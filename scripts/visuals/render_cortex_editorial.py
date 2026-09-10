"""NaS Cortex: conceptual eight-domain architecture in a physically lit studio."""
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

# Eight independent curved domains form a unified architectural sculpture.
for k in range(8):
 angle=k*math.tau/8
 vertices=[];faces=[]
 for j in range(65):
  t=-1.12+2.24*j/64
  radius=1.65+.20*math.cos(t*2)
  for side in [-1,1]:
   phi=angle+side*.15+.16*math.sin(t)
   vertices.append((radius*math.cos(phi),radius*math.sin(phi),2.1+1.40*math.sin(t)))
 for j in range(64):faces.append((j*2,j*2+1,j*2+3,j*2+2))
 mesh=bpy.data.meshes.new(f'Domain {k+1}');mesh.from_pydata(vertices,[],faces);mesh.update()
 obj=bpy.data.objects.new(f'Cortex domain {k+1}',mesh);scene.collection.objects.link(obj)
 obj.data.materials.append(gold if k in [0,3,6] else platinum)
 solid=obj.modifiers.new('Precision shell','SOLIDIFY');solid.thickness=.07
 bevel=obj.modifiers.new('Soft machined edges','BEVEL');bevel.width=.025;bevel.segments=4
 obj.modifiers.new('Weighted normals','WEIGHTED_NORMAL')
 for p in mesh.polygons:p.use_smooth=True
# A shared core is a conceptual link, not a measured neural or molecular structure.
bpy.ops.mesh.primitive_uv_sphere_add(segments=96,ring_count=64,radius=.72,location=(0,0,2.1))
core=bpy.context.object;core.name='Shared knowledge core';core.data.materials.append(graphite)
for p in core.data.polygons:p.use_smooth=True
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
camera=bpy.context.object;aim(camera,(0,0,2.1));camera.data.type='ORTHO';camera.data.ortho_scale=6.8
scene.camera=camera
scene.render.film_transparent=False
scene['artwork_disclosure']='Conceptual eight-domain knowledge architecture. Not an anatomical model or measured network.'
scene['design']='NaS Research / Cortex editorial visual / eight domains'
scene.render.filepath=str(OUT/'cortex-domains.png')
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'cortex-domains.blend'),compress=True)
bpy.ops.render.render(write_still=True)
if os.environ.get('NAS_ART_MASTER')=='1':
 scene.render.image_settings.file_format='OPEN_EXR';scene.render.image_settings.color_depth='16'
 bpy.data.images['Render Result'].save_render(str(OUT/'cortex-domains-linear.exr'),scene=scene)
print('NAS_RENDER_COMPLETE',scene.render.resolution_x,scene.render.resolution_y,flush=True)
