"""Check actual Next-generated monograph HTML. This is not visual/interaction QA."""
import argparse
import json
import re
from html.parser import HTMLParser
from pathlib import Path


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.sections, self.ids, self.citations = [], [], []
        self.details = self.heroes = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.append(attrs["id"])
        if tag == "section" and "data-monograph-section" in attrs:
            self.sections.append(attrs.get("id"))
        if tag == "a" and attrs.get("href", "").startswith("#reference-"):
            self.citations.append(attrs["href"][1:])
        self.details += tag == "details"
        self.heroes += tag == "h1"


parser = argparse.ArgumentParser()
parser.add_argument("--report", type=Path)
args = parser.parse_args()
ledger = json.loads(Path("docs/drug-library/completion-audit.json").read_text())
registry = Path("src/data/drugMonographs/index.js").read_text()
slugs = ["acetaminophen", *re.findall(r'^  "([^\"]+)":', registry, re.MULTILINE)]
results = []
for slug in slugs:
    page = Page()
    page.feed((Path(".next/server/app/learn/pharmacy/drugs") / f"{slug}.html").read_text())
    assert page.sections == ledger["immutableBlueprint"]["sectionOrder"], (slug, page.sections)
    assert page.heroes == 1, (slug, "hero")
    assert page.details >= 21, (slug, "missing disclosure cards")
    assert page.citations and all(anchor in page.ids for anchor in page.citations), (slug, "broken citations")
    results.append({"slug": slug, "orderedSections": "passed", "referencesResolve": "passed", "singleHero": "passed", "disclosureCount": page.details})
if args.report:
    args.report.write_text(json.dumps({"scope": "Generated HTML only; desktop/mobile visual and interaction QA remain separate", "profiles": results}, indent=2) + "\n")
print(f"Passed generated HTML checks for {len(results)} monograph routes.")
