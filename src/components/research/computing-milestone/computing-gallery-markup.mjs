export const galleryInterval = 5500;
export const galleryCaptions = [
 'A research environment for imaging, analysis, and scientific discovery.',
 'A Mac Studio workstation on a wooden desk.',
 'A BioBank pancreas model on a Mac Studio workstation.'
];
export function renderComputingGallery(){
 return `<figure class="cg-gallery" data-computing-gallery data-active-slide="0" role="region" aria-roledescription="carousel" aria-label="Computing at work" tabindex="0">
 <div class="cg-frame">
  <div class="cg-slide" data-cg-slide="0" data-active="true" id="computing-gallery-slide-1" role="group" aria-roledescription="slide" aria-label="1 of 3: The research environment">
   <img class="cg-photo" style="object-position:center 55%" src="/research/building-the-next-stage-of-nas-computing/gallery-approved-v3/scientist-2048.webp" srcset="/research/building-the-next-stage-of-nas-computing/gallery-approved-v3/scientist-960.webp 960w, /research/building-the-next-stage-of-nas-computing/gallery-approved-v3/scientist-2048.webp 2048w" sizes="(max-width: 700px) 100vw, 900px" width="3840" height="2560" alt="A scientist at a desk reviewing molecular visualization and brain images, with a Mac Studio beside the displays." loading="lazy" decoding="async"/>
  </div>
  <div class="cg-slide" data-cg-slide="1" data-active="false" id="computing-gallery-slide-2" role="group" aria-roledescription="slide" aria-label="2 of 3: The Mac Studio workstation" aria-hidden="true" inert>
   <img class="cg-photo" src="/research/building-the-next-stage-of-nas-computing/gallery-photo-v2/mac-studio-2048.webp" srcset="/research/building-the-next-stage-of-nas-computing/gallery-photo-v2/mac-studio-960.webp 960w, /research/building-the-next-stage-of-nas-computing/gallery-photo-v2/mac-studio-2048.webp 2048w" sizes="(max-width: 700px) 100vw, 900px" width="2048" height="1152" alt="Mac Studio beneath a display on a wooden desk, with a keyboard in the foreground." loading="lazy" decoding="async"/>
  </div>
  <div class="cg-slide" data-cg-slide="2" data-active="false" id="computing-gallery-slide-3" role="group" aria-roledescription="slide" aria-label="3 of 3: A BioBank model on screen" aria-hidden="true" inert>
   <img class="cg-photo" src="/research/building-the-next-stage-of-nas-computing/gallery-pancreas-v5/pancreas-1672.webp" srcset="/research/building-the-next-stage-of-nas-computing/gallery-pancreas-v5/pancreas-960.webp 960w, /research/building-the-next-stage-of-nas-computing/gallery-pancreas-v5/pancreas-1672.webp 1672w" sizes="(max-width: 700px) 100vw, 900px" width="1672" height="941" alt="A smaller BioBank pancreas model within a Blender-style interface on a monitor beside a Mac Studio, against black." loading="lazy" decoding="async"/>
  </div>
 </div>
 <div class="cg-dots" role="group" aria-label="Choose a slide">${['The research environment','The Mac Studio workstation','A BioBank model on screen'].map((label,i)=>`<button type="button" data-cg-dot="${i}" aria-label="Show ${label}, slide ${i+1} of 3" aria-controls="computing-gallery-slide-${i+1}" aria-pressed="${i===0}"><span></span></button>`).join('')}</div>


 <span class="cg-sr" data-cg-status aria-live="polite" aria-atomic="true"></span>
 <span class="cg-sr">Use the dots or left and right arrow keys to change slides. Space pauses or resumes automatic movement. Slides pause while hovered or focused.</span>
 </figure>`;
}
