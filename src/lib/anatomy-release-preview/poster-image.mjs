// Responsive posters preserve the complete frame and use the live scene aspect ratio.
export function posterImageAttributes(poster){
 if(!poster)return {};
 const attributes={src:poster.src,width:poster.width,height:poster.height};
 if(poster.srcSet){attributes.srcSet=poster.srcSet;attributes.sizes="(max-width: 760px) 100vw, (max-width: 1500px) 80vw, 1200px";}
 return attributes;
}
