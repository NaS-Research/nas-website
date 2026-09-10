import bpy
bpy.ops.wm.open_mainfile(filepath='/tmp/nas-brain.blend')
for o in bpy.data.objects:
 if o.type=='MESH':
  mod=o.modifiers.new('Smooth cortical surface','SMOOTH');mod.factor=.8;mod.iterations=5
s=bpy.context.scene;s.cycles.samples=48;s.render.resolution_x=2400;s.render.resolution_y=1800;s.render.filepath='/tmp/nas-brain-final.png'
s.render.image_settings.color_depth='16'
bpy.ops.wm.save_as_mainfile(filepath='/tmp/nas-brain-final.blend')
bpy.ops.render.render(write_still=True)
s.render.image_settings.file_format='OPEN_EXR';s.render.image_settings.color_depth='16';bpy.data.images['Render Result'].save_render('/tmp/nas-brain-final.exr',scene=s)
