import bpy, math, os
from mathutils import Vector
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath='/Users/agndj/Documents/NaS/nas-website/public/learn/models/body/nervous.glb')
terms=['gyrus','gyri','sulcus','sulci','pole.','precuneus','cuneus','parietal lobule','temporal plane','insula','lat_fis','telencephalon','corpus callosum']
keep=[]
for o in list(bpy.data.objects):
 if o.type=='MESH' and any(t in o.name.lower() for t in terms):keep.append(o)
 else:bpy.data.objects.remove(o,do_unlink=True)
bpy.context.view_layer.update()
pts=[o.matrix_world@Vector(v) for o in keep for v in o.bound_box];lo=Vector([min(p[i] for p in pts) for i in range(3)]);hi=Vector([max(p[i] for p in pts) for i in range(3)]);center=(lo+hi)/2;scale=3/max(hi-lo)
for o in keep:
 mw=o.matrix_world.copy();o.parent=None;o.matrix_world=mw
 for v in o.data.vertices:v.co=(mw@v.co-center)*scale
 o.matrix_world.identity()
 for p in o.data.polygons:p.use_smooth=True
mat=bpy.data.materials.new('Natural cortical tissue');mat.use_nodes=True;n=mat.node_tree.nodes;l=mat.node_tree.links;p=n.get('Principled BSDF');p.inputs['Roughness'].default_value=.43;p.inputs['Subsurface Weight'].default_value=.12
noise=n.new('ShaderNodeTexNoise');noise.inputs['Scale'].default_value=7;noise.inputs['Detail'].default_value=4
r=n.new('ShaderNodeValToRGB');r.color_ramp.elements[0].color=(.30,.17,.135,1);r.color_ramp.elements[1].color=(.66,.46,.36,1);l.new(noise.outputs['Fac'],r.inputs[0]);l.new(r.outputs[0],p.inputs['Base Color'])
fine=n.new('ShaderNodeTexNoise');fine.inputs['Scale'].default_value=170;fine.inputs['Detail'].default_value=3
b=n.new('ShaderNodeBump');b.inputs['Strength'].default_value=.12;b.inputs['Distance'].default_value=.012;l.new(fine.outputs['Fac'],b.inputs['Height']);l.new(b.outputs[0],p.inputs['Normal'])
for o in keep:o.data.materials.clear();o.data.materials.append(mat)
def aim(o,at=(0,0,0)):o.rotation_euler=(Vector(at)-o.location).to_track_quat('-Z','Y').to_euler()
bpy.ops.object.camera_add(location=(4,-6,3.3));cam=bpy.context.object;aim(cam);cam.data.type='ORTHO';cam.data.ortho_scale=4.5;bpy.context.scene.camera=cam
for name,pos,power,size,color in [('Key',(-3,-4,6),550,4,(1,.9,.8)),('Fill',(4,-1,2),160,3,(.8,.87,1)),('Rim',(1,4,4),700,3,(1,.85,.65))]:
 bpy.ops.object.light_add(type='AREA',location=pos);o=bpy.context.object;o.name=name;o.data.energy=power;o.data.shape='DISK';o.data.size=size;o.data.color=color;aim(o)
s=bpy.context.scene;s.world=bpy.data.worlds.new('Charcoal');s.world.use_nodes=True;s.world.node_tree.nodes['Background'].inputs[0].default_value=(.025,.025,.028,1);s.world.node_tree.nodes['Background'].inputs[1].default_value=.3
s.render.engine='CYCLES';s.cycles.samples=48;s.cycles.use_denoising=True;s.render.resolution_x=1600;s.render.resolution_y=1200;s.render.resolution_percentage=100;s.view_settings.view_transform='AgX';s.render.image_settings.file_format='PNG';s.render.filepath='/tmp/nas-brain-preview.png'
bpy.ops.wm.save_as_mainfile(filepath='/tmp/nas-brain.blend');bpy.ops.render.render(write_still=True)
