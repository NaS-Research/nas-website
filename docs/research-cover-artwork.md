# Research library artwork and layouts

The library provides Cards, Compact, and Preview views. View changes retain the
current query, content type, area, and sort order. `publicationArtwork.js` maps
all current publications to their cover. The same artwork component supplies
standalone heroes for research papers; existing institutional video heroes remain.

The Denials cover is an original Blender Cycles render of ivory evidence leaves
and a gold layer. It is conceptual artwork, not patient data or measured results.
The scene, source, native 2400px PNG and scene-linear EXR are archived at:
`/Volumes/AGNDJ 6TB/NaS-Core-Data/publications/visuals/denials-evidence-v1/`.
Render with `scripts/visuals/render_denials_editorial.py` and the NAS_ART_OUTPUT,
NAS_ART_WIDTH, NAS_ART_SAMPLES and NAS_ART_MASTER environment variables.

Chicago covers are stills extracted from the site's existing ChicagoOne (2s)
and ChicagoThree (4s) videos. Lossless stills are archived in the sibling
`library-covers-v1` directory. These retain the existing footage's provenance;
the neighborhood panorama is described as Chicago, not a verified Hyde Park view.

All new web images are sRGB WebP. The 2400px Denials render is native, not upscaled.
The editable scene supports higher-resolution future exports. Existing Atlas
artwork and Cortex artwork are reused, with conceptual captions on paper heroes.

## Cortex and homepage cover update

Cortex now uses an original eight-domain Blender sculpture around a shared core.
It represents the proposed architecture conceptually, not anatomy or a measured
network. Native PNG, EXR, editable scene, and render source are archived under
`/Volumes/AGNDJ 6TB/NaS-Core-Data/publications/visuals/cortex-domains-v1/`.
The homepage now uses the same artwork mapping as the library and article heroes,
replacing the former results-chart and PDF-cover thumbnails. Scientific figures
and the published PDFs are unchanged.
