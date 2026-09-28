"""Prepare all shipped systems in Blender with shared baked surface materials.
Run after refine_anatomy.py / optimize_anatomy.py. Existing organ textures are retained.
Source IDs are preserved; coarse soft tissues receive gentle subdivision. Cosmetic maps do not represent histology.
"""
import bpy, os, json, struct, math
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2]; BASE=ROOT/'public/learn/models/body'; DESIGN=ROOT/'design/anatomy'
# Import the shared bake helper without running the organ-specific export.
import runpy
texture_material=runpy.run_path(str(ROOT/'scripts/blender/refine_anatomy.py'))['texture_material']
bpy.context.preferences.filepaths.save_version=0
PALETTES={'bone':('b9ad93','eee3cc'),'muscle':('773637','bc7162'),'nerve':('c7b77c','e8d8a0'),'artery':('842c32','bb5d55'),'vein':('414d76','6b7f9e'),'gland':('a46450','d7a080'),'soft':('995f5e','d49b91'),'spleen':('5e2738','a55c68'),'lymph':('947766','bca487'),'cartilage':('9eb5bc','d8dfd9')}
bpy.ops.wm.read_factory_settings(use_empty=True)
scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.samples=8;scene.cycles.device='CPU'
for kind,palette in PALETTES.items():
 bpy.ops.mesh.primitive_plane_add(size=.04)
 obj=bpy.context.object;obj.name=kind
 texture_material(obj,palette,512,subdivide=False)
 mat=obj.data.materials[0];mat.name='Atlas '+kind+' surface';mat.use_fake_user=True
 bpy.data.objects.remove(obj,do_unlink=True)
bpy.ops.wm.save_as_mainfile(filepath=str(DESIGN/'surface-library.blend'),compress=True)
report_path=DESIGN/'systems-build-report.json'
report=json.loads(report_path.read_text()) if report_path.exists() else []
for file in os.environ.get('ATLAS_BUILD_FILES','body,nervous,visceral,cardiovascular,lymphatic').split(','):
 source=BASE/(file+'.glb')
 if not source.exists():continue
 bpy.ops.wm.read_factory_settings(use_empty=True)
 blob=source.read_bytes();g=json.loads(blob[20:20+struct.unpack_from('<I',blob,12)[0]])
 ids={n.get('name'):f'{file}:{i}' for i,n in enumerate(g['nodes'])}
 refined=BASE/'refined'/(file+'.glb')
 bpy.ops.import_scene.gltf(filepath=str(refined if file in ['visceral','cardiovascular'] and refined.exists() else source))
 with bpy.data.libraries.load(str(DESIGN/'surface-library.blend'),link=False) as (a,b):b.materials=[n for n in a.materials if n.startswith('Atlas ')]
 materials={k:next(m for m in b.materials if m and m.name.startswith('Atlas '+k+' surface')) for k in PALETTES}
 count=0
 for obj in list(bpy.data.objects):
  if obj.name in ids and not obj.get('atlasSourceId'):obj['atlasSourceId']=ids[obj.name]
  if obj.type!='MESH':continue
  if not obj.get('atlasSourceId'):raise ValueError('Missing source ID '+obj.name)
  count+=1
  for p in obj.data.polygons:p.use_smooth=True
  if any(m and m.name.endswith(' tissue') for m in obj.data.materials):continue
  name=obj.name.lower()
  kind='soft'
  if file=='body':kind='bone' if obj.get('type')=='bone' else 'muscle'
  elif file=='nervous':kind='gland' if 'gland' in name else 'nerve'
  elif file=='lymphatic':kind='spleen' if name=='spleen' else 'lymph'
  elif file=='cardiovascular':kind='vein' if ('vein' in name or 'vena' in name) else 'artery'
  elif any(s in name for s in ['gland','hypophysis','prostate']):kind='gland'
  elif any(s in name for s in ['trachea','bronchus','cartilage']):kind='cartilage'
  if kind in ['gland','soft','lymph','spleen'] and len(obj.data.polygons)<15000 and not obj.get('atlasSurfaceSubdivision'):
   bpy.context.view_layer.objects.active=obj
   mod=obj.modifiers.new('Gentle tissue surface subdivision','SUBSURF');mod.levels=1
   bpy.ops.object.modifier_apply(modifier=mod.name);obj['atlasSurfaceSubdivision']=1
  obj.data.materials.clear();obj.data.materials.append(materials[kind])
  # A local spherical UV map avoids joining parts or changing source topology.
  if True:
   while obj.data.uv_layers:obj.data.uv_layers.remove(obj.data.uv_layers[0])
   uv=obj.data.uv_layers.new(name='Surface UV');coords=[v.co for v in obj.data.vertices]
   if coords:
    lo=[min(v[i] for v in coords) for i in range(3)];hi=[max(v[i] for v in coords) for i in range(3)];mid=[(lo[i]+hi[i])/2 for i in range(3)]
    for loop in obj.data.loops:
     v=coords[loop.vertex_index];u=.5+math.atan2(v.y-mid[1],v.x-mid[0])/(2*math.pi);w=(v.z-lo[2])/max(hi[2]-lo[2],1e-8);uv.data[loop.index].uv=(u,w)
  obj['atlasSurfaceFamily']=kind
 bpy.ops.wm.save_as_mainfile(filepath=str(DESIGN/(file+'-system.blend')),compress=True)
 target=BASE/'refined'/(file+'.glb')
 bpy.ops.export_scene.gltf(filepath=str(target),export_format='GLB',export_extras=True,export_yup=True,export_animations=False,export_draco_mesh_compression_enable=True,export_draco_mesh_compression_level=6)
 report=[r for r in report if r['file']!=file]
 report.append({'file':file,'meshObjects':count,'bytes':target.stat().st_size,'blender':bpy.app.version_string})
 print('SYSTEM_COMPLETE',file,count,flush=True)
(DESIGN/'systems-build-report.json').write_text(json.dumps(report,indent=2))
