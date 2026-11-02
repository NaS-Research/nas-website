import {Box3,Matrix3,Raycaster,Vector3} from 'three';
/** Project each authored teaching region onto actual model geometry once per load. */
export function buildRegionAnchors(model,regions){
 model.updateWorldMatrix(true,true);
 const meshes=[];model.traverse(node=>{if(node.isMesh)meshes.push(node);});
 if(!meshes.length)throw new Error('Region markers require model geometry.');
 const box=new Box3().setFromObject(model),ray=new Raycaster(),normalMatrix=new Matrix3();
 return regions.map(region=>{
  if(region.position.length!==3||!region.position.every(Number.isFinite))throw new Error('Invalid region coordinate.');
  const target=new Vector3(...region.position);
  ray.set(new Vector3(target.x,target.y,box.max.z+1),new Vector3(0,0,-1));
  const hit=ray.intersectObjects(meshes,false)[0];
  let point,normal,method;
  if(hit){point=hit.point.clone();normal=hit.face.normal.clone().applyMatrix3(normalMatrix.getNormalMatrix(hit.object.matrixWorld)).normalize();method='front-surface-ray';}
  else{
   let distance=Infinity;const vertex=new Vector3();
   for(const mesh of meshes){const positions=mesh.geometry.attributes.position,normals=mesh.geometry.attributes.normal;normalMatrix.getNormalMatrix(mesh.matrixWorld);
    for(let i=0;i<positions.count;i++){vertex.fromBufferAttribute(positions,i).applyMatrix4(mesh.matrixWorld);const d=vertex.distanceToSquared(target);if(d<distance){distance=d;point=vertex.clone();normal=normals?new Vector3().fromBufferAttribute(normals,i).applyMatrix3(normalMatrix).normalize():vertex.clone().normalize();}}
   }method='nearest-surface-vertex';
  }
  if(!point||!normal)throw new Error('No surface anchor found.');
  return {...region,position:point.addScaledVector(normal,.025).toArray(),normal:normal.toArray(),anchorMethod:method};
 });
}
