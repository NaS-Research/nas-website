from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import json,zipfile,re
r=Path.cwd(); base=r/'.next/server/app'
class Page(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.ids=set();self.title=False;self.description=False;self.canonical=None;self.missing_alt=0;self.images=[];self.h1=0
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a:self.ids.add(a['id'])
  if tag=='title':self.title=True
  if tag=='h1':self.h1+=1
  if tag=='meta' and a.get('name')=='description':self.description=bool(a.get('content'))
  if tag=='link' and a.get('rel')=='canonical':self.canonical=a.get('href')
  if tag=='a' and a.get('href'):self.links.append(a['href'])
  if tag=='img':
   if 'alt' not in a:self.missing_alt+=1
   self.images.append(a.get('src',''))
pages={}
for f in base.rglob('*.html'):
 route='/'+str(f.relative_to(base)).removesuffix('.html');route='/' if route=='/index' else route
 p=Page();p.feed(f.read_text());pages[route]=p
broken=set(); anchors=set(); metadata=[];external=set()
for route,p in pages.items():
 if route.startswith('/_'):continue
 if not p.title or not p.description or not p.canonical:metadata.append({'route':route,'title':p.title,'description':p.description,'canonical':p.canonical})
 for link in p.links:
  u=urlsplit(link)
  if u.netloc and u.netloc!='nasresearch.bio':
   if u.scheme in ['http','https']:external.add(link)
   continue
  if u.scheme not in ['','http','https']:continue
  target=unquote(u.path) or route
  if not target.startswith('/'):continue
  if target in pages:
   if u.fragment and unquote(u.fragment) not in pages[target].ids:anchors.add((route,link))
  elif not (r/'public'/target.lstrip('/')).exists() and target not in ['/contact','/nicole'] and not target.startswith('/api/'):
   broken.add((route,link))
archives=[]
for f in (r/'public').rglob('*.zip'):
 with zipfile.ZipFile(f) as z:
  suspect=[n for n in z.namelist() if re.search(r'(^|/)(\.env|\.git|id_rsa)|\.(pem|key|sqlite|db)$',n)]
  archives.append({'file':str(f.relative_to(r)),'entries':len(z.namelist()),'suspiciousNames':suspect})
report={'pages':len(pages),'brokenLocalLinks':sorted(broken),'missingAnchors':sorted(anchors),'metadataGaps':metadata,'missingAlt':{k:v.missing_alt for k,v in pages.items() if v.missing_alt},'archives':archives,'externalLinks':sorted(external)}
Path('/tmp/nas-html-audit.json').write_text(json.dumps(report,indent=2))
print(json.dumps({k:v for k,v in report.items() if k!='externalLinks'},indent=2));print('External URLs',len(external))
