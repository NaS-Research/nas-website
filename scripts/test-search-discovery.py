"""Audit built HTML or a running Next.js site without JavaScript execution.

Full coverage (including dynamic routes):
  python3 scripts/test-search-discovery.py --base-url http://127.0.0.1:3000 \
      --output /path/to/external/evidence/search-discovery.json

Without --base-url, available .next/server/app HTML and public viewers are read.
Missing/dynamic routes are reported as incomplete (exit 2), never silently passed.
Exit 1 means a failed check; exit 0 means all requested checks passed.
"""
import argparse
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import sys
from urllib.error import HTTPError
from urllib.parse import urljoin, urlsplit, urlunsplit
from urllib.request import HTTPRedirectHandler, Request, build_opener
import xml.etree.ElementTree as ET

BASE = "https://nasresearch.bio"
ROOT = Path(__file__).resolve().parents[1]


def normalized_url(value):
    url = urlsplit(value)
    return urlunsplit((url.scheme.lower(), url.netloc.lower(),
                      url.path.rstrip("/") or "/", url.query, url.fragment))


def normalized_text(value):
    return " ".join(value.split())


class Page(HTMLParser):
    """Parse the entire response, including metadata streamed after </head>."""
    def __init__(self, html):
        super().__init__(convert_charrefs=True)
        self.meta = defaultdict(list)
        self.canonicals = []
        self.titles = []
        self.links = set()
        self.footer_links = set()
        self.json_ld = []
        self._title = None
        self._json = None
        self._footer = 0
        self._svg = 0
        self.feed(html)
        self.close()

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "svg":
            self._svg += 1
        elif tag == "title" and not self._svg:
            self._title = []
        elif tag == "meta":
            key = attrs.get("name") or attrs.get("property")
            if key:
                self.meta[key.lower()].append(attrs.get("content", ""))
        elif tag == "link" and "canonical" in attrs.get("rel", "").lower().split():
            self.canonicals.append(attrs.get("href", ""))
        elif tag == "footer":
            self._footer += 1
        elif tag == "a" and attrs.get("href"):
            href = normalized_url(urljoin(BASE, attrs["href"]))
            self.links.add(href)
            if self._footer:
                self.footer_links.add(href)
        elif tag == "script" and attrs.get("type", "").lower() == "application/ld+json":
            self._json = []

    def handle_endtag(self, tag):
        if tag == "title" and self._title is not None:
            self.titles.append(normalized_text("".join(self._title)))
            self._title = None
        elif tag == "script" and self._json is not None:
            self.json_ld.append("".join(self._json))
            self._json = None
        elif tag == "footer":
            self._footer = max(0, self._footer - 1)
        elif tag == "svg":
            self._svg = max(0, self._svg - 1)

    def handle_data(self, data):
        if self._title is not None:
            self._title.append(data)
        if self._json is not None:
            self._json.append(data)


class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, request, fp, code, msg, headers, newurl):
        return None


class MissingBuiltPage(Exception):
    pass


class Source:
    def __init__(self, base_url, build_dir, timeout):
        self.base_url = base_url.rstrip("/") if base_url else None
        self.build_dir = build_dir
        self.timeout = timeout

    def read(self, route):
        if self.base_url:
            request = Request(self.base_url + route, headers={
                "User-Agent": "NaS-Search-Discovery-Audit/1.0",
                "Accept": "text/html,application/xml;q=0.9,*/*;q=0.8",
                "Accept-Encoding": "identity",
            })
            try:
                response = build_opener(NoRedirect()).open(request, timeout=self.timeout)
            except HTTPError as error:
                response = error
            with response:
                raw = response.read()
                charset = response.headers.get_content_charset() or "utf-8"
                return raw.decode(charset, errors="replace"), response.status, dict(response.headers), len(raw)
        if urlsplit(route).query:
            raise MissingBuiltPage("Query variant requires --base-url")
        if route.startswith("/learn/body-atlas/") and route.endswith(".html"):
            path = ROOT / "public" / route.lstrip("/")
        elif route == "/sitemap.xml":
            path = self.build_dir / "sitemap.xml.body"
        else:
            path = self.build_dir / ((route.lstrip("/") or "index") + ".html")
        if not path.is_file():
            raise MissingBuiltPage(f"No built HTML at {path}; use --base-url for dynamic routes")
        raw = path.read_bytes()
        return raw.decode("utf-8"), 200, {}, len(raw)


def forbidden_indexing(page, headers):
    directives = page.meta["robots"] + page.meta["googlebot"]
    directives += [value for key, value in headers.items() if key.lower() == "x-robots-tag"]
    return any(re.search(r"\b(?:noindex|none)\b", value, re.I) for value in directives)


def inspect_page(source, route, canonical=None, private=False, expected_status=200):
    result = {"route": route, "expected_status": expected_status, "errors": []}
    try:
        html, status, headers, size = source.read(route)
        result.update(status=status, response_bytes=size)
        if status != expected_status:
            result["errors"].append(f"Expected HTTP {expected_status}, received {status}; redirects are not followed")
            return result
        page = Page(html)
        if private:
            if not forbidden_indexing(page, headers):
                result["errors"].append("Expected noindex on nonpublic/embedded page")
            return result
        if forbidden_indexing(page, headers):
            result["errors"].append("Public sitemap page is noindex")
        if len(page.titles) != 1 or not page.titles[0]:
            result["errors"].append(f"Expected one nonempty title, found {page.titles!r}")
        result["title"] = page.titles[0] if page.titles else ""
        descriptions = page.meta["description"]
        if len(descriptions) != 1 or not normalized_text(descriptions[0]):
            result["errors"].append("Expected one nonempty meta description")
        result["description"] = normalized_text(descriptions[0]) if descriptions else ""
        expected = normalized_url(canonical or BASE + route)
        if len(page.canonicals) != 1 or normalized_url(page.canonicals[0]) != expected:
            result["errors"].append(f"Canonical mismatch: {page.canonicals!r}; expected {expected}")
        result["canonical"] = page.canonicals
        for field in ("og:url", "og:title", "og:description", "twitter:title", "twitter:description", "twitter:card"):
            values = page.meta[field]
            if len(values) != 1 or not normalized_text(values[0]):
                result["errors"].append(f"Expected one nonempty {field}")
        if page.meta["og:url"] and normalized_url(page.meta["og:url"][0]) != expected:
            result["errors"].append(f"og:url mismatch: {page.meta['og:url']!r}")
        for field in ("og:image", "twitter:image"):
            images = page.meta[field]
            if not images or any(urlsplit(image).scheme not in ("http", "https") or not urlsplit(image).netloc for image in images):
                result["errors"].append(f"Missing or non-absolute {field}: {images!r}")
        result["social"] = {field: page.meta[field] for field in ("og:url", "og:image", "twitter:image")}
        if not page.json_ld:
            result["errors"].append("Missing site JSON-LD")
        for number, document in enumerate(page.json_ld, 1):
            try:
                value = json.loads(document)
                if not isinstance(value, (dict, list)):
                    raise ValueError("Expected JSON object or array")
            except (ValueError, TypeError) as error:
                result["errors"].append(f"Invalid JSON-LD script {number}: {error}")
        result["json_ld_scripts"] = len(page.json_ld)
        if normalized_url(BASE + "/sitemap") not in page.footer_links:
            result["errors"].append("Missing global footer link to /sitemap")
        if route == "/sitemap":
            result["directory_links"] = sorted(page.links)
    except MissingBuiltPage as error:
        result["skipped"] = str(error)
    except Exception as error:
        result["errors"].append(f"{type(error).__name__}: {error}")
    return result


def audit(args):
    source = Source(args.base_url, args.build_dir, args.timeout)
    report = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "mode": "running-server" if args.base_url else "built-files",
        "source": args.base_url or str(args.build_dir),
        "canonical_origin": BASE, "errors": [], "pages": [], "additional_checks": [],
    }
    try:
        xml, status, _, _ = source.read("/sitemap.xml")
        if status != 200:
            raise ValueError(f"Sitemap returned HTTP {status}")
        root = ET.fromstring(xml)
        if root.tag.rsplit("}", 1)[-1] != "urlset":
            raise ValueError("Expected a sitemap urlset")
        urls = [element.text or "" for element in root.findall(".//{*}loc")]
        if not urls:
            raise ValueError("Sitemap contains no URLs")
        if len(urls) != len({normalized_url(url) for url in urls}):
            report["errors"].append("Duplicate sitemap URLs")
        valid_urls = []
        for url in urls:
            parts = urlsplit(url)
            if parts.scheme != "https" or parts.netloc != "nasresearch.bio" or parts.query or parts.fragment:
                report["errors"].append(f"Invalid sitemap URL: {url!r}")
            else:
                valid_urls.append(url)
        normalized = {normalized_url(url) for url in urls}
        for required in ("/", "/workspace", "/learn/library", "/sitemap"):
            if normalized_url(BASE + required) not in normalized:
                report["errors"].append(f"Missing required sitemap route {required}")
        for element in root.findall(".//{*}lastmod"):
            try:
                datetime.fromisoformat((element.text or "").replace("Z", "+00:00"))
            except ValueError:
                report["errors"].append(f"Invalid sitemap lastmod: {element.text!r}")
        routes = [urlsplit(url).path or "/" for url in valid_urls]
        report["sitemap_urls"] = len(urls)
        report["drug_routes"] = sum(route.startswith("/learn/pharmacy/drugs/") for route in routes)
        with ThreadPoolExecutor(max_workers=args.workers) as pool:
            for number, result in enumerate(pool.map(lambda route: inspect_page(source, route), routes), 1):
                report["pages"].append(result)
                if number % 50 == 0:
                    print(f"Checked {number}/{len(routes)} sitemap pages", flush=True)
        for field in ("title", "description"):
            groups = defaultdict(list)
            for page in report["pages"]:
                if page.get(field):
                    groups[normalized_text(page[field]).casefold()].append(page["route"])
            for value, duplicates in groups.items():
                if len(duplicates) > 1:
                    report["errors"].append(f"Duplicate {field}: {duplicates}")
        directory = next((page for page in report["pages"] if page["route"] == "/sitemap"), {})
        if not directory.get("skipped"):
            links = set(directory.get("directory_links", []))
            missing = sorted(normalized - links)
            if missing:
                report["errors"].append(f"XML URLs missing from HTML directory: {missing}")
        # The design preview intentionally calls notFound() outside development.
        private_routes = (("/login", 200), ("/account/preview", 404),
                          ("/learn/body-atlas/index.html", 200),
                          ("/learn/body-atlas/journey.html", 200))
        for route, expected_status in private_routes:
            if normalized_url(BASE + route) in normalized:
                report["errors"].append(f"Nonpublic/embedded route included in sitemap: {route}")
            report["additional_checks"].append(inspect_page(
                source, route, private=True, expected_status=expected_status))
        report["additional_checks"].append(inspect_page(
            source, "/research?area=Genomics", canonical=BASE + "/research"))
    except Exception as error:
        report["errors"].append(f"{type(error).__name__}: {error}")
    results = report["pages"] + report["additional_checks"]
    report["failed_checks"] = len(report["errors"]) + sum(len(page["errors"]) for page in results)
    report["skipped_checks"] = sum("skipped" in page for page in results)
    report["complete"] = not report["skipped_checks"] and not report["errors"] and bool(report["pages"])
    report["passed"] = report["complete"] and not report["failed_checks"]
    return report


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--base-url", help="Running site origin, e.g. http://127.0.0.1:3000; canonicals must still use nasresearch.bio")
    parser.add_argument("--build-dir", type=Path, default=ROOT / ".next/server/app")
    parser.add_argument("--output", type=Path, help="JSON evidence file (use the external evidence/output directory)")
    parser.add_argument("--workers", type=int, choices=range(1, 5), default=2, metavar="1-4")
    parser.add_argument("--timeout", type=float, default=30, help="Per-request timeout in seconds")
    args = parser.parse_args()
    if args.base_url:
        origin = urlsplit(args.base_url)
        if origin.scheme not in ("http", "https") or not origin.netloc or origin.path not in ("", "/") or origin.query or origin.fragment or origin.username:
            parser.error("--base-url must be an HTTP(S) origin without path, credentials, query, or fragment")
    if args.timeout <= 0:
        parser.error("--timeout must be positive")
    report = audit(args)
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
    for error in report["errors"]:
        print("FAIL:", error, file=sys.stderr)
    for page in report["pages"] + report["additional_checks"]:
        for error in page["errors"]:
            print(f"FAIL: {page['route']}: {error}", file=sys.stderr)
        if page.get("skipped"):
            print(f"INCOMPLETE: {page['route']}: {page['skipped']}", file=sys.stderr)
    state = "PASS" if report["passed"] else "FAIL" if report["failed_checks"] else "INCOMPLETE"
    print(f"{state}: {len(report['pages'])} sitemap pages; {report.get('drug_routes', 0)} drug routes; "
          f"{report['failed_checks']} failures; {report['skipped_checks']} incomplete checks.")
    return 0 if report["passed"] else 1 if report["failed_checks"] else 2


if __name__ == "__main__":
    raise SystemExit(main())
