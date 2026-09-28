import bpy,os
ROOT=os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))));out=os.path.join(ROOT,'public/learn/models/body/refined');design=os.path.join(ROOT,'design/anatomy')
for name in ['visceral','cardiovascular']:
 source=os.path.join(out,name+'.blend');bpy.ops.wm.open_mainfile(filepath=source)
 bpy.ops.export_scene.gltf(filepath=os.path.join(out,name+'.glb'),export_format='GLB',export_extras=True,export_yup=True,export_animations=False,export_draco_mesh_compression_enable=True,export_draco_mesh_compression_level=6)
 os.replace(source,os.path.join(design,name+'.blend'))
