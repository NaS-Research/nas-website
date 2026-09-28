"""Build portable organ studies from the refined Blender exports.
Use the small GLBs for future organ-specific pages. Retains source IDs and placement.
"""
import bpy,json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2]
studies=json.loads((ROOT/'design/anatomy/organ-study-manifest.json').read_text())
out=ROOT/'public/learn/models/organs';out.mkdir(exist_ok=True)
masters=ROOT/'design/anatomy/studies';masters.mkdir(exist_ok=True)
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.context.preferences.filepaths.save_version=0
for layer in ['visceral','cardiovascular']:
 bpy.ops.import_scene.gltf(filepath=str(ROOT/'public/learn/models/body/refined'/f'{layer}.glb'))
index={o.get('atlasSourceId'):o for o in bpy.data.objects if o.type=='MESH'}
report=[]
for study in studies:
 bpy.ops.object.select_all(action='DESELECT')
 objects=[index[i] for i in study['parts']]
 for o in objects:o.select_set(True)
 bpy.ops.export_scene.gltf(filepath=str(out/(study['id']+'.glb')),use_selection=True,export_format='GLB',export_extras=True,export_yup=True,export_animations=False,export_draco_mesh_compression_enable=True,export_draco_mesh_compression_level=6)
 # Library files contain the selected objects and their dependencies, rather than
 # duplicating an entire whole-body scene in every organ master.
 bpy.data.libraries.write(str(masters/(study['id']+'.blend')),set(objects),fake_user=True,compress=True)
 report.append({'id':study['id'],'parts':len(objects),'bytes':(out/(study['id']+'.glb')).stat().st_size})
 print('STUDY_EXPORTED',study['id'],len(objects),flush=True)
(masters/'export-report.json').write_text(json.dumps(report,indent=2))
