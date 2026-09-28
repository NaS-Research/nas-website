# Anatomy sources and Blender pipeline

## Implemented locally

The atlas exposes 2,363 named structures in six model layers. The organ directory
has 54 navigation targets across 12 categories, of which 45 resolve to supplied
meshes. Categories are for navigation and do not imply complete system coverage.
The spleen, both thymus lobes, tonsils and lymph-node groups were recovered from
the original Z-Anatomy Blender file: 159 additional surface meshes.

All five GLB files (body combines skeletal and muscular layers) pass through
Blender 5.2.0. Outputs preserve source structure IDs and existing organ textures,
add shared baked color/normal/roughness materials, and use Draco compression.
Each web asset is under 20 MiB. `design/anatomy/systems-build-report.json` records
actual output counts and sizes. Editable Blender files are in `design/anatomy/`.

## Source assessment

- **Z-Anatomy:** https://github.com/Z-Anatomy/Models-of-human-anatomy
  Official `Z-Anatomy.zip` was downloaded and inspected with auto-execution
  disabled. Its 4,569 mesh objects include annotation markers; this is not a
  count of renderable anatomical structures. The lymphatic export excludes
  markers with no faces. Bilateral kidney world positions were checked against
  the current source GLB; positions matched. The original supports the existing
  male reference body. Its README lists additional third-party exceptions;
  verify individual provenance before importing unrelated bonus models.
- **BodyParts3D:** https://dbarchive.biosciencedbc.jp/en/bodyparts3d/download.html
  Useful as a named anatomical hierarchy and mesh source. The archive page
  offers heavily reduced meshes, so those downloads are not automatically a
  visual-quality upgrade. Retain its attribution and applicable model license.
- **Human Reference Atlas:** https://humanatlas.io/3d-reference-library
  https://3d.nih.gov/collections/hra
  Medical-illustrator-created, organ-expert-approved reference objects. The
  library includes female reproductive organs, spleen, thymus, skin and other
  organs. Candidate source for remaining gaps; no HRA assets are yet shipped.
  Check each object's version, license, anatomy coverage, scale and coordinate
  frame before integration. Do not place a differently registered organ into
  the existing male body without validating the registration.

## Rebuild

1. Download the official Z-Anatomy ZIP from the repository above; extract
   `Z-Anatomy/Startup.blend` outside `public/`. Never enable embedded scripts.
2. Run Blender with `--background --disable-autoexec PATH/Startup.blend
   --python scripts/blender/import_lymphatic.py`.
3. The organ-specific starting pass is `refine_anatomy.py`, followed by
   `optimize_anatomy.py`. These are retained from the previous six-organ pass.
4. Run Blender with `--background --factory-startup --python
   scripts/blender/build_systems.py`. This creates the shared material library,
   editable system files and all five browser assets. Existing organ-specific
   maps in refined visceral/cardio assets are preserved.
5. Run `node scripts/build-atlas-index.mjs` and
   `node scripts/audit-anatomy-coverage.mjs`.
6. Run the four atlas test scripts with `node --test`, then `npm run build --
   --webpack`. Check gland isolation, lymphatic selection and mobile scrolling
   in the actual browser.

## Remaining anatomy and quality work

`design/anatomy/coverage.json` is the concrete per-target inventory. Missing
navigation targets are rectum, ovaries, uterus, uterine tubes, vagina, mammary
glands, skin, sweat glands and sebaceous glands. The inventory is not a complete
Terminologia Anatomica mapping. Small intestine currently contains duodenum and
jejunum, not the entire intestinal tract. Several brain views are component
selections rather than complete organs.

Microscopic glands, histology, lobular cutaways, vascular microstructure and
organ-specific physiological animation need separate reviewed geometry. Smooth
shading and procedural surface maps do not create this anatomy and should not
be represented as achieving the reference videos' detail. The existing geometric
section plane exposes the supplied mesh; it does not synthesize internal anatomy.

For final-quality organ studies: select a provenance-tracked detailed source,
validate anatomy/registration, retain high-resolution Blender masters, author
materials and anatomical cutaways, render stills, and export progressively loaded
web levels of detail. Review each organ in the viewer before adding it to the
available inventory. Do not use a generated image as ground truth for anatomy.

## Verification

Production webpack build passed. All 13 atlas tests passed after the final asset
export, including source ID retention in every layer and precise gland membership.
Browser checks covered spleen and thyroid rendering, pituitary component isolation,
and 390px mobile layout without horizontal overflow. Visual review corrected
texture-edge artifacts, coarse soft-tissue faceting and washed-out tissue colors.
These checks validate implementation behavior, not independent anatomical review.

## Layered organ studies

Ten reusable study assemblies now combine the source organ with its available
connected anatomy: heart, lungs, kidneys, liver, stomach, pancreas, thyroid,
adrenals, parotid glands and submandibular glands. The lung assembly contains
81 named source structures, including its five lobes, trachea, bronchi and named
arterial/venous branches. None of the vascular trees were procedurally invented.

The viewer offers Surface, Layered anatomy, See through and connected-structure
views. Shell transparency is an inspection aid rather than a tissue property.
The shared renderer uses MeshPhysicalMaterial with restrained dielectric highlights,
up to 2x pixel ratio, and selected-study shadow maps fitted to the organ bounds.
Microscopic vessels, alveoli, histology and full detailed cutaway anatomy are not
added by these rendering changes.

`src/data/organAssemblies.js` is the reusable study definition. Run
`node scripts/build-organ-study-manifest.mjs`, then Blender with
`--background --factory-startup --python scripts/blender/export_organ_studies.py`.
Outputs are `public/learn/models/organs/*.glb` and editable Blender object libraries
in `design/anatomy/studies/`. These are prepared for future organ-specific pages;
those pages have not been created in this pass. The current whole-body viewer still
loads the whole-system assets so body context and individual selection work.
The exported GLBs retain exactly the source IDs in each study manifest.

Validation: production build and 16 atlas tests passed, including exact exported
study membership and isolation of lung anatomy from unrelated vessels.

## Male/female reference selection (2026-09-09)

The selector loads independent models and catalogs. Male remains the refined
Z-Anatomy model (2,363 structures); female uses HRA Visible Human Female v1.1
(801 meshes, 7 display layers including skin). Female ovaries, uterus, uterine
tubes, and vagina are actual source anatomy, not replacements positioned inside
the male body. HRA coverage differs: no complete skeleton, muscle set, or full
set of endocrine glands. Disabled guide entries expose these gaps.

`build_female_reference.py` imports `/tmp/VH_F_United.glb`, preserves source
coordinates/hierarchy and IDs, excludes extraction-site annotations, and exports
Draco GLB plus an editable Blender object library. Attribution and source hash
are in `design/anatomy/female-provenance.json`. CC BY 4.0 applies to this model.
Switching sex remounts the viewer and resets selection, layers, and section state.

Heart assembly now has 31 source parts, adding valves, papillary muscles,
cardiac veins and proximal great vessels. The 31-part standalone study was
re-exported in Blender; the interactive view uses the same source-ID manifest.
