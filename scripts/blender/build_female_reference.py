"""Import HRA's CC-BY-4.0 female reference; retain its own coordinates and source hierarchy."""
import bpy,json,struct,re,hashlib
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2]
source=Path('/tmp/VH_F_United.glb')
b=source.read_bytes(); doc=json.loads(b[20:20+struct.unpack_from('<I',b,12)[0]])
parents={c:i for i,n in enumerate(doc['nodes']) for c in n.get('children',[])}
def ancestors(i):
 names=[]
 while i in parents:
  i=parents[i];names.append(doc['nodes'][i].get('name',''))
 return names
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.context.preferences.filepaths.save_version=0
bpy.ops.import_scene.gltf(filepath=str(source))
lookup={o.name:o for o in bpy.data.objects}
layer_map={'integumentary':'skin','nervous':'nervous','muscular':'muscular','reproductive':'visceral','digestive':'visceral','urinary':'visceral','circulatory':'cardiovascular','respiratory':'visceral','lymphatic':'lymphatic','skeletal':'skeleton'}
organ_map={'VH_F_heart':'heart','VH_F_lungs':'lungs','VH_F_kidney':'kidneys','VH_F_liver':'liver','VH_F_pancreas':'pancreas','VH_F_ovary':'ovaries','VH_F_uterus':'uterus','VH_F_fallopian_tube':'uterine-tubes','VH_F_spleen':'spleen','VH_F_thymus':'thymus','Allen_brain':'brain','VH_F_colon':'large-intestine','VH_F_small_intestine':'small-intestine','VH_F_urinary_bladder':'bladder'}
keep=[];catalog=[]
for i,n in enumerate(doc['nodes']):
 if 'mesh' not in n or i>=970:continue
 o=lookup.get(n.get('name')); chain=ancestors(i)
 if not o:raise ValueError(n.get('name'))
 layer=next((v for k,v in layer_map.items() if 'VH_F_'+k+'_system' in chain),'visceral')
 name=re.sub(r'^(VH_F_|Allen_|Yao_)','',n['name']).replace('_',' ')
 name=re.sub(r'\bL\b','left',name);name=re.sub(r'\bR\b','right',name)
 name=name.replace('cardiac atrium','atrium');name=name[0].upper()+name[1:]
 oid='female:'+str(i); organs=[v for k,v in organ_map.items() if k in chain]
 if n['name']=='VH_F_skin':organs=['skin']
 if n['name']=='VH_F_vagina':organs=['vagina']
 o['atlasSourceId']=oid;o['atlasLayer']=layer;o['name']=name
 o['atlasOrgans']=organs
 for polygon in o.data.polygons:polygon.use_smooth=True
 for slot in o.material_slots:
  if slot.material and slot.material.use_nodes:
   shader=next((x for x in slot.material.node_tree.nodes if x.type=='BSDF_PRINCIPLED'),None)
   if shader:shader.inputs['Roughness'].default_value=.55;shader.inputs['Metallic'].default_value=0
 keep.append(o);catalog.append({'id':oid,'name':name,'layerId':layer,'organIds':organs})
bpy.ops.object.select_all(action='DESELECT')
for o in keep:o.select_set(True)
out=ROOT/'public/learn/models/body/refined/female.glb'
bpy.ops.export_scene.gltf(filepath=str(out),use_selection=True,export_format='GLB',export_extras=True,export_animations=False,export_draco_mesh_compression_enable=True,export_draco_mesh_compression_level=6)
bpy.data.libraries.write(str(ROOT/'design/anatomy/female-reference.blend'),set(keep),fake_user=True,compress=True)
(ROOT/'public/learn/body-atlas/structures-female.json').write_text(json.dumps(sorted(catalog,key=lambda x:x['name'])))
(ROOT/'design/anatomy/female-provenance.json').write_text(json.dumps({'source':'https://github.com/hubmapconsortium/ccf-3d-reference-object-library/blob/main/VH_Female/v1.1/VH_F_United.glb','license':'CC-BY-4.0','attribution':'Human Reference Atlas, HuBMAP Consortium; Visible Human Female reference object library','sha256':hashlib.sha256(b).hexdigest(),'structures':len(catalog),'changes':'Blender import/export, smooth shading, material roughness, Draco compression, source hierarchy metadata. Extraction annotations excluded. Original reference geometry and coordinates preserved.'},indent=2))
print('FEMALE_COMPLETE',len(catalog),out.stat().st_size,flush=True)
