"""Check the built public search surface after npm run build."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
import json
import xml.etree.ElementTree as ET

BASE = 'https://nasresearch.bio'
BUILD = Path('.next/server/app')
class Head(HTMLParser):
    def __init__(self, text):
        super().__init__(); self.meta = {}; self.canonical = None
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'meta': self.meta[attrs.get('name') or attrs.get('property')] = attrs.get('content')
        if tag == 'link' and attrs.get('rel') == 'canonical': self.canonical = attrs.get('href')

root = ET.parse(BUILD / 'sitemap.xml.body')
urls = [el.text for el in root.findall('.//{*}loc')]
assert len(urls) == len(set(urls)), 'Duplicate sitemap URLs'
assert BASE + '/learn/library' in urls
assert sum('/drugs/' in url for url in urls) == 300
for url in urls:
    assert url.startswith(BASE) and not urlparse(url).query, url
    route = urlparse(url).path
    file = BUILD / ((route.lstrip('/') or 'index') + '.html')
    assert file.exists(), f'Sitemap route not built: {url}'
    head = Head(file.read_text())
    assert head.canonical and head.canonical.rstrip('/') == url.rstrip('/'), f'Wrong canonical: {url}: {head.canonical}'
    assert 'noindex' not in (head.meta.get('robots') or ''), f'Noindex route in sitemap: {url}'
    assert head.meta.get('description'), f'Missing description: {url}'
for route in ['learn', 'learn/library', 'learn/pharmacy/drugs', 'learn/pharmacy/atlas', 'learn/pharmacy/review', 'learn/pharmacy/drugs/acetaminophen', 'learn/pharmacy/modules/hypertension']:
    file = BUILD / (route + '.html')
    if not file.exists(): continue
    head = Head(file.read_text())
    assert head.meta.get('og:url') == BASE + '/' + route, f'Wrong share URL: {route}'
    assert head.meta.get('og:description') == head.meta.get('description'), f'Homepage description inherited: {route}'
html = (BUILD / 'index.html').read_text()
assert 'home-research-identity-title' in html
assert 'Biomedical Research &amp; Life Science Tools' in html
assert '"alternateName":"NaS"' in html
links = (BUILD / 'sitemap.html').read_text()
for url in urls:
    if '/drugs/' in url: assert 'href="' + urlparse(url).path + '"' in links, url
for el in root.findall('.//{*}lastmod'):
    assert el.text and 'Invalid' not in el.text
print(f'PASS: {len(urls)} unique canonical, indexable built pages; 300 medication links; learning previews and brand identity.')
