"""Reproducible surface-material refinement of the licensed atlas meshes.
No invented internal structures or vascular networks. Output retains source node IDs.
"""
import bpy, os, json, struct, re
ROOT=os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
BASE=os.path.join(ROOT,'public/learn/models/body'); OUT=os.path.join(BASE,'refined');os.makedirs(OUT,exist_ok=True)
def linear(hexstr):
 rgb=[int(hexstr[i:i+2],16)/255 for i in (0,2,4)]
 return tuple(v/12.92 if v<.04045 else ((v+.055)/1.055)**2.4 for v in rgb)+(1,)
def texture_material(obj,palette,res,subdivide=True):
 bpy.context.view_layer.objects.active=obj;obj.select_set(True)
 # Gentle subdivision removes polygon edges without remodeling anatomical landmarks.
 if subdivide:
  mod=obj.modifiers.new('Surface refinement','SUBSURF');mod.levels=1;mod.render_levels=1
  bpy.ops.object.modifier_apply(modifier=mod.name)
 for polygon in obj.data.polygons:polygon.use_smooth=True
 bpy.ops.object.mode_set(mode='EDIT');bpy.ops.mesh.select_all(action='SELECT');bpy.ops.uv.smart_project(island_margin=.025) if subdivide else bpy.ops.uv.reset();bpy.ops.object.mode_set(mode='OBJECT')
 mat=bpy.data.materials.new(obj.name+' tissue');mat.use_nodes=True;obj.data.materials.clear();obj.data.materials.append(mat)
 n=mat.node_tree.nodes;l=mat.node_tree.links;n.clear()
 out=n.new('ShaderNodeOutputMaterial');bs=n.new('ShaderNodeBsdfPrincipled');l.new(bs.outputs['BSDF'],out.inputs['Surface'])
 coords=n.new('ShaderNodeTexCoord');noise=n.new('ShaderNodeTexNoise');noise.inputs['Scale'].default_value=7;noise.inputs['Detail'].default_value=4;noise.inputs['Roughness'].default_value=.7;l.new(coords.outputs['Generated'],noise.inputs['Vector'])
 ramp=n.new('ShaderNodeValToRGB');ramp.color_ramp.elements[0].position=.19;ramp.color_ramp.elements[0].color=linear(palette[0]);ramp.color_ramp.elements[1].position=.82;ramp.color_ramp.elements[1].color=linear(palette[1]);l.new(noise.outputs['Fac'],ramp.inputs[0]);l.new(ramp.outputs['Color'],bs.inputs['Base Color'])
 fine=n.new('ShaderNodeTexNoise');fine.inputs['Scale'].default_value=155;fine.inputs['Detail'].default_value=2;l.new(coords.outputs['Generated'],fine.inputs['Vector'])
 bump=n.new('ShaderNodeBump');bump.inputs['Strength'].default_value=.2;bump.inputs['Distance'].default_value=.00011;l.new(fine.outputs['Fac'],bump.inputs['Height']);l.new(bump.outputs['Normal'],bs.inputs['Normal'])
 rough=n.new('ShaderNodeMapRange');rough.inputs['From Min'].default_value=0;rough.inputs['From Max'].default_value=1;rough.inputs['To Min'].default_value=.29;rough.inputs['To Max'].default_value=.46;l.new(noise.outputs['Fac'],rough.inputs[0]);l.new(rough.outputs[0],bs.inputs['Roughness'])
 images={}
 for kind in ['color','normal','roughness']:
  img=bpy.data.images.new(obj.name+' '+kind,width=res,height=res);img.colorspace_settings.name='sRGB' if kind=='color' else 'Non-Color'
  tex=n.new('ShaderNodeTexImage');tex.image=img
  for node in n:node.select=False
  tex.select=True;n.active=tex
  if kind=='normal':bpy.ops.object.bake(type='NORMAL',margin=12)
  else:
   emit=n.new('ShaderNodeEmission');l.new(ramp.outputs['Color'] if kind=='color' else rough.outputs[0],emit.inputs['Color']);l.new(emit.outputs[0],out.inputs['Surface']);bpy.ops.object.bake(type='EMIT',margin=12);n.remove(emit);l.new(bs.outputs[0],out.inputs['Surface'])
  img.pack();images[kind]=img
 n.clear();out=n.new('ShaderNodeOutputMaterial');bs=n.new('ShaderNodeBsdfPrincipled');l.new(bs.outputs[0],out.inputs['Surface'])
 for kind,img in images.items():
  tex=n.new('ShaderNodeTexImage');tex.image=img
  if kind=='normal':normal=n.new('ShaderNodeNormalMap');l.new(tex.outputs['Color'],normal.inputs['Color']);l.new(normal.outputs[0],bs.inputs['Normal'])
  else:l.new(tex.outputs['Color'],bs.inputs['Base Color' if kind=='color' else 'Roughness'])
 obj.select_set(False)
if __name__ == '__main__':
 for file in ['visceral','cardiovascular']:
  bpy.ops.wm.read_factory_settings(use_empty=True)
  source=os.path.join(BASE,file+'.glb');blob=open(source,'rb').read();data=json.loads(blob[20:20+struct.unpack_from('<I',blob,12)[0]])
  ids={node.get('name'):str(i) for i,node in enumerate(data['nodes'])}
  bpy.ops.import_scene.gltf(filepath=source)
  scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.samples=8;scene.cycles.device='CPU';scene.render.bake.use_clear=True
  bpy.ops.object.select_all(action='DESELECT')
  for obj in list(bpy.data.objects):
   if obj.name in ids:obj['atlasSourceId']=file+':'+ids[obj.name]
   if obj.type!='MESH':continue
   name=obj.name.lower();palette=None
   if 'kidney.' in name:palette=('67252c','b5675a')
   elif re.match(r'liver\.\d',name):palette=('512027','995447')
   elif 'lobe of' in name and 'lung' in name:palette=('965652','d59b90')
   elif re.match(r'stomach\.\d',name):palette=('a96a63','d9a396')
   elif re.match(r'pancreas\.\d',name):palette=('ad8064','d8b493')
   elif file=='cardiovascular' and re.match(r'(left|right) (atrium|ventricle)\.',name):palette=('742a32','bb6458')
   if palette:
    print('BAKING',file,obj.name,flush=True);texture_material(obj,palette,1024 if 'kidney' in name else 512)
  bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT,file+'.blend'),compress=True)
  bpy.ops.export_scene.gltf(filepath=os.path.join(OUT,file+'.glb'),export_format='GLB',export_extras=True,export_yup=True,export_animations=False)
  print('EXPORTED',file,flush=True)
