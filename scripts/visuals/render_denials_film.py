"""Editable NaS Denials studio film. All geometry is original; no patient records."""
import bpy, math, os
from pathlib import Path
from mathutils import Vector
OUT=Path(os.environ['NAS_FILM_OUTPUT']); OUT.mkdir(parents=True,exist_ok=True)
bpy.ops.wm.read_factory_settings(use_empty=True)
s=bpy.context.scene;s.render.engine=os.environ.get('NAS_FILM_ENGINE','CYCLES');s.cycles.samples=48;s.cycles.use_denoising=True
try:
 p=bpy.context.preferences.addons['cycles'].preferences;p.compute_device_type='METAL';p.get_devices()
 for d in p.devices:d.use=d.type=='METAL'
 s.cycles.device='GPU'
except Exception:pass
s.cycles.max_bounces=6;s.render.resolution_x=int(os.environ.get('NAS_FILM_WIDTH','1280'));s.render.resolution_y=round(s.render.resolution_x*9/16);s.render.resolution_percentage=100
s.render.fps=24;s.frame_start=1;s.frame_end=144;s.render.image_settings.file_format='PNG';s.render.image_settings.color_depth='16';s.render.image_settings.color_mode='RGB'
s.view_settings.view_transform='AgX';s.view_settings.look='AgX - Medium High Contrast'
s.world=bpy.data.worlds.new('Black studio');s.world.use_nodes=True;s.world.node_tree.nodes['Background'].inputs[0].default_value=(.015,.017,.02,1);s.world.node_tree.nodes['Background'].inputs[1].default_value=.2

def mat(name,c,rough,metal=0):
 m=bpy.data.materials.new(name);m.use_nodes=True;n=m.node_tree.nodes;b=n.get('Principled BSDF');b.inputs['Base Color'].default_value=(*c,1);b.inputs['Roughness'].default_value=rough;b.inputs['Metallic'].default_value=metal
 noise=n.new('ShaderNodeTexNoise');noise.inputs['Scale'].default_value=210;noise.inputs['Detail'].default_value=2
 bump=n.new('ShaderNodeBump');bump.inputs['Strength'].default_value=.12;bump.inputs['Distance'].default_value=.0015;m.node_tree.links.new(noise.outputs['Fac'],bump.inputs['Height']);m.node_tree.links.new(bump.outputs['Normal'],b.inputs['Normal'])
 return m
paper=mat('Ivory cotton paper - fine fibers',(.78,.75,.68),.72)
gold=mat('Brushed champagne index tab',(.48,.29,.105),.31,1)
floor=mat('Charcoal matte stone',(.009,.011,.014),.48)

def page(name,z,curl,twist=0):
 nx,ny=48,64;v=[];f=[]
 for j in range(ny+1):
  y=(j/ny-.5)*3.6
  for i in range(nx+1):
   x=(i/nx-.5)*2.55;t=j/ny
   bend=curl*(max(0,(t-.3)/.7)**2.4)
   v.append((x,y,z+bend+twist*x*t*t))
 for j in range(ny):
  for i in range(nx):
   a=j*(nx+1)+i;f.append((a,a+1,a+nx+2,a+nx+1))
 mesh=bpy.data.meshes.new(name);mesh.from_pydata(v,[],f);mesh.update();o=bpy.data.objects.new(name,mesh);s.collection.objects.link(o);o.data.materials.append(paper)
 for p in mesh.polygons:p.use_smooth=True
 sol=o.modifiers.new('True sheet thickness','SOLIDIFY');sol.thickness=.006
 bev=o.modifiers.new('Soft cut edges','BEVEL');bev.width=.002;bev.segments=2
 return o
for i in range(20):
 o=page('Bound evidence sheet %02d'%i,.025+i*.009,.018+i*.002);o.rotation_euler[2]=.004*math.sin(i*1.7)
leaf=page('Turning review sheet',.22,.88,.09)
leaf.shape_key_add(name='Rest');k=leaf.shape_key_add(name='Breath')
for v in k.data:
 t=(v.co.y+1.8)/3.6;v.co.z+=.32*t*t;v.co.x+=.035*t*t
k.value=.5;k.driver_add('value').driver.expression='0.5-0.5*cos(2*pi*(frame-1)/144)'
# A discreet physical index tab on the flat front corner.
bpy.ops.mesh.primitive_cube_add(size=1,location=(1.14,-1.15,.25));o=bpy.context.object;o.name='Gold review tab';o.dimensions=(.32,.56,.009);bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(gold);b=o.modifiers.new('Rounded tab corners','BEVEL');b.width=.018;b.segments=6;o.modifiers.new('Normals','WEIGHTED_NORMAL')
bpy.ops.mesh.primitive_plane_add(size=200);bpy.context.object.name='Seamless graphite studio';bpy.context.object.data.materials.append(floor)
def aim(o,p):o.rotation_euler=(Vector(p)-o.location).to_track_quat('-Z','Y').to_euler()
def light(name,pos,power,size,color,sy):
 d=bpy.data.lights.new(name,'AREA');d.energy=power;d.shape='RECTANGLE';d.size=size;d.size_y=sy;d.color=color;o=bpy.data.objects.new(name,d);s.collection.objects.link(o);o.location=pos;aim(o,(0,0,.3));return o
light('Large diffused silk',(-3,-3,6),450,5,(1,.95,.87),4)
light('Long edge reflection',(2,3,5),650,4,(.9,.94,1),1.3)
light('Soft fill',(-3,3,2),120,3,(1,.89,.74),3)
bpy.ops.object.empty_add(location=(0,0,.38));target=bpy.context.object;target.name='Camera focus'
bpy.ops.object.camera_add(location=(4.6,-6.5,4.7));cam=bpy.context.object;cam.data.lens=43;aim(cam,target.location);s.camera=cam
con=cam.constraints.new('TRACK_TO');con.target=target;con.track_axis='TRACK_NEGATIVE_Z';con.up_axis='UP_Y'
cam.driver_add('location',0).driver.expression='4.6+0.18*sin(2*pi*(frame-1)/144)'
cam.driver_add('location',2).driver.expression='4.7+0.07*(1-cos(2*pi*(frame-1)/144))'
cam.data.dof.use_dof=True;cam.data.dof.focus_object=target;cam.data.dof.aperture_fstop=9
s['description']='Six-second seamless studio film: fine paper, gold review tab, subtle page flex and camera orbit. No actual case records.'
s.frame_set(1);s.render.filepath=str(OUT/'preview.png');bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'denials-studio.blend'),compress=True)
if os.environ.get('NAS_FILM_ANIMATE')=='1':
 (OUT/'frames').mkdir(exist_ok=True);s.render.filepath=str(OUT/'frames/frame-');bpy.ops.render.render(animation=True)
else:bpy.ops.render.render(write_still=True)
