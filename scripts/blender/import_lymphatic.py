"""Open the official Z-Anatomy Startup.blend with --disable-autoexec, then run this script.
Exports only actual lymphoid surface meshes; excludes two-vertex annotation markers.
Original coordinates match the shipped atlas (verified against both kidneys).
"""
import bpy
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2]
deps=bpy.context.evaluated_depsgraph_get();copies=[]
for o in list(bpy.data.objects):
 if o.type!='MESH' or len(o.data.polygons)==0 or not any(c.name=='6: Lymphoid organs' for c in o.users_collection):continue
 mesh=bpy.data.meshes.new_from_object(o.evaluated_get(deps));n=bpy.data.objects.new(o.name+' exported',mesh);n.matrix_world=o.matrix_world.copy();n['name']=o.name;n['sourceName']=o.name;copies.append(n)
print('COPIED',len(copies),flush=True)
bpy.data.batch_remove([o for o in list(bpy.data.objects) if o not in copies])
for o in copies:
 bpy.context.scene.collection.objects.link(o);o.name=o['sourceName'];o.data.materials.clear();o.select_set(True)
bpy.ops.export_scene.gltf(filepath=str(ROOT/'public/learn/models/body/lymphatic.glb'),export_format='GLB',export_extras=True,export_yup=True,export_animations=False,use_selection=True,export_draco_mesh_compression_enable=True)
print('LYMPHATIC_EXPORTED',len(copies),flush=True)
