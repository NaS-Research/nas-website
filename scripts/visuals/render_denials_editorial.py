"""NaS sequence sculpture: conceptual editorial art, not molecular coordinates."""
import bpy, math, os
from pathlib import Path
from mathutils import Vector

OUT=Path(os.environ['NAS_ART_OUTPUT'])
OUT.mkdir(parents=True,exist_ok=True)
bpy.ops.wm.read_factory_settings(use_empty=True)
# Large Cycles tile caches must share the external production volume.
render_cache=OUT/'render-cache'
render_cache.mkdir(exist_ok=True)
bpy.context.preferences.filepaths.temporary_directory=str(render_cache)
scene=bpy.context.scene
scene.render.engine='CYCLES'
scene.cycles.samples=int(os.environ.get('NAS_ART_SAMPLES','96'))
scene.cycles.use_denoising=True
scene.cycles.adaptive_threshold=0.018
scene.cycles.max_bounces=8
# Use the installed Apple Metal device when supported, otherwise keep CPU rendering.
try:
 prefs=bpy.context.preferences.addons['cycles'].preferences
 prefs.compute_device_type='METAL';prefs.get_devices()
 devices=[d for d in prefs.devices if d.type=='METAL']
 if devices:
  for d in prefs.devices:d.use=d.type=='METAL'
  scene.cycles.device='GPU'
except Exception:pass
scene.render.resolution_x=int(os.environ.get('NAS_ART_WIDTH','1400'))
scene.render.resolution_y=int(scene.render.resolution_x*.75)
scene.render.resolution_percentage=100
scene.render.image_settings.file_format='PNG'
scene.render.image_settings.color_mode='RGB'
scene.render.image_settings.color_depth='16'
scene.view_settings.view_transform='AgX'
scene.view_settings.look='AgX - Medium High Contrast'
scene.world=bpy.data.worlds.new('NaS studio world')
scene.world.color=(.035,.035,.035)
scene.world.use_nodes=True
scene.world.node_tree.nodes['Background'].inputs['Color'].default_value=(.045,.047,.052,1)
scene.world.node_tree.nodes['Background'].inputs['Strength'].default_value=.28


def metal(name,color,roughness):
 m=bpy.data.materials.new(name);m.use_nodes=True
 n=m.node_tree.nodes;bs=n.get('Principled BSDF')
 bs.inputs['Base Color'].default_value=(*color,1)
 bs.inputs['Metallic'].default_value=1
 bs.inputs['Roughness'].default_value=roughness
 bs.inputs['Anisotropic'].default_value=.34
 noise=n.new('ShaderNodeTexNoise');noise.inputs['Scale'].default_value=165
 noise.inputs['Detail'].default_value=2
 bump=n.new('ShaderNodeBump');bump.inputs['Strength'].default_value=.085;bump.inputs['Distance'].default_value=.009
 m.node_tree.links.new(noise.outputs['Fac'],bump.inputs['Height'])
 m.node_tree.links.new(bump.outputs['Normal'],bs.inputs['Normal'])
 return m

gold=metal('Champagne gold | satin microfinish',(.60,.365,.125),.235)
platinum=metal('Warm platinum | brushed finish',(.62,.59,.53),.27)
graphite=metal('Graphite | dark anodized finish',(.028,.032,.038),.3)

# Suspended document leaves, aligned into a single evidence stack.
paper=bpy.data.materials.new('Warm archival paper');paper.use_nodes=True
bs=paper.node_tree.nodes.get('Principled BSDF');bs.inputs['Base Color'].default_value=(.83,.79,.70,1);bs.inputs['Roughness'].default_value=.48
for i in range(11):
 bpy.ops.mesh.primitive_cube_add(size=1,location=((i-5)*.075,0,.8+i*.19))
 obj=bpy.context.object;obj.name=f'Evidence leaf {i+1:02d}'
 obj.dimensions=(3.6,2.55,.038);obj.rotation_euler[2]=(i-5)*.045
 bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
 obj.data.materials.append(gold if i==6 else paper)
 bevel=obj.modifiers.new('Soft paper edges','BEVEL');bevel.width=.035;bevel.segments=5
 obj.modifiers.new('Weighted normals','WEIGHTED_NORMAL')
# Restrained studio stage catches soft physical shadows without a visible horizon.
bpy.ops.mesh.primitive_plane_add(size=200,location=(0,0,0))
ground=bpy.context.object;ground.name='Infinite charcoal studio'
mat=bpy.data.materials.new('Charcoal studio surface');mat.use_nodes=True
bs=mat.node_tree.nodes.get('Principled BSDF');bs.inputs['Base Color'].default_value=(.006,.007,.009,1);bs.inputs['Roughness'].default_value=.32;bs.inputs['Metallic'].default_value=.28
ground.data.materials.append(mat)


def aim(obj,point):obj.rotation_euler=(Vector(point)-obj.location).to_track_quat('-Z','Y').to_euler()
def light(name,position,power,size,color,target=(0,0,2),size_y=None):
 data=bpy.data.lights.new(name,'AREA');data.energy=power;data.color=color;data.shape='RECTANGLE';data.size=size;data.size_y=size_y or size
 obj=bpy.data.objects.new(name,data);scene.collection.objects.link(obj);obj.location=position;aim(obj,target)
light('Large silk key',(-3,-4,7),1150,5,(1,.90,.77),size_y=3)
light('Long platinum edge',(4,1,6),1700,5,(.91,.95,1),size_y=1.2)
light('Soft frontal fill',(0,-6,3),350,3,(1,1,1),size_y=5)
light('Fine warm rim',(-4,3,4),1050,3,(1,.75,.45),size_y=.6)

bpy.ops.object.camera_add(location=(7,-11,7.3))
camera=bpy.context.object;aim(camera,(0,0,1.7));camera.data.type='ORTHO';camera.data.ortho_scale=6.6
scene.camera=camera
scene.render.film_transparent=False
scene['artwork_disclosure']='Conceptual evidence stack. Not patient records or measured outcomes.'
scene['design']='NaS Research / Denials editorial visual / aligned evidence leaves'
scene.render.filepath=str(OUT/'denials-evidence.png')
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'denials-evidence.blend'),compress=True)
bpy.ops.render.render(write_still=True)
if os.environ.get('NAS_ART_MASTER')=='1':
 scene.render.image_settings.file_format='OPEN_EXR';scene.render.image_settings.color_depth='16'
 bpy.data.images['Render Result'].save_render(str(OUT/'denials-evidence-linear.exr'),scene=scene)
print('NAS_RENDER_COMPLETE',scene.render.resolution_x,scene.render.resolution_y,flush=True)
