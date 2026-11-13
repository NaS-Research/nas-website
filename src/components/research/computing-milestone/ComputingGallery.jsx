"use client";
import {createElement,useEffect,useRef} from 'react';
import {renderComputingGallery} from './computing-gallery-markup.mjs';
import {mountComputingGallery} from './computing-gallery-controller.mjs';
import './computing-gallery.css';
const markup=renderComputingGallery();
export default function ComputingGallery(){
 const host=useRef(null);
 useEffect(()=>mountComputingGallery(host.current?.querySelector('[data-computing-gallery]')),[]);
 return createElement('div',{ref:host,dangerouslySetInnerHTML:{__html:markup}});
}
