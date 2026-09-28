NaS anatomy surface refinement, 2026-09-09.
Derived from the adjacent Z-Anatomy / BodyParts3D browser models.
Original attribution and licenses: ../LICENSE.txt. These derivative assets retain CC BY-SA 4.0.

Blender 5.2: one-level subdivision on selected organ surfaces; smooth normals;
UV-unwrapped, baked tissue-color, roughness, and tangent-normal maps; Draco compression.
Textures are artistic surface treatments, not histology or clinical findings.
No new vessels, internal structures, or pathological features are represented.
Source structure identifiers are retained in each node's atlasSourceId property.

Rebuild with scripts/blender/refine_anatomy.py followed by scripts/blender/optimize_anatomy.py.
Editable .blend files are stored in design/anatomy outside the public directory.

Full-system pass: body, nervous, visceral, cardiovascular, and lymphatic GLBs
are exported through Blender by scripts/blender/build_systems.py. Shared baked
surface families cover bone, muscle, nerves, vessels, glands, soft tissue and
lymphatic organs. Existing organ-specific textures are retained. These maps
are artistic shading, not observed microscopic anatomy. Source IDs are preserved. Coarse soft tissues receive one level of surface
subdivision to reduce faceting; no internal anatomy is added. Editable outputs: design/anatomy/*-system.blend.
