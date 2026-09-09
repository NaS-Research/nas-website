# Atlas editorial artwork

The NAS-AGA-001 hero is original conceptual artwork: 145 separate gold and
platinum lamellae in a physically lit Blender scene. It does not encode variant
scores, represent RNU4-2 coordinates, or show an observed molecular structure.
The visible caption and image alternative text preserve that distinction.

Editable scenes, lossless display masters, scene-linear EXR masters, and previews
live on the external drive at:

`/Volumes/AGNDJ 6TB/NaS-Core-Data/studies/NAS-AGA-001/visuals/atlas-editorial-v2/`

Render with Blender 5.2 LTS, setting `NAS_ART_OUTPUT` to the external master
directory, `NAS_ART_WIDTH=8192`, `NAS_ART_SAMPLES=96`, and `NAS_ART_MASTER=1`.
Run Blender in background mode with `--python render_atlas_editorial.py`.
The saved scene retains geometry, materials, lights, camera, and render settings.

The initial web release uses a native 2400 × 2100, 96-sample render in
`web-source/`, produced independently while the archival 8K master renders.
It is not an upscaled preview. Export either native production PNG with:

```sh
node scripts/visuals/export_atlas_editorial.cjs "$MASTER_PNG" public/research/atlas-rnu42
```

The exporter embeds sRGB profiles and makes AVIF plus WebP at 960, 1600, and
2400 pixels. Do not substitute a preview or reinterpret the linear EXR as sRGB.
The EXR remains a production master, not a browser-delivery asset.

Companion scientific figures use the exact SVG exports from research-note-v1.2.
This visual update does not change study data, estimates, claims, or the already
published PDF. Inspect the artwork at full size and in desktop/mobile layouts
before publishing derivatives.
