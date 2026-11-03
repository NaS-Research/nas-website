export const preparationLimits=Object.freeze({activeScenes:1,retainedDecodedModels:0,adjacentPrefetches:0,maxModelBytes:128*1024*1024});
export function preparationMargin(height){return Math.max(1,Math.round(Number.isFinite(height)&&height>0?height:800))+'px 0px';}
export const shouldPrepareModel=({near,visible})=>Boolean(near&&visible);
