"""Render biology-first NAS-BRCA-002 PAM50 artwork in Blender.

The cover depicts a stylized breast-tumor cell field. The method artwork moves
inside one stylized cell to show a nucleus, chromatin-like fibers, and exactly 50
RNA-expression signal strands for the fixed PAM50 gene panel. Nothing in either
scene is patient material, a literal PAM50 molecule, or an empirical data plot.
"""

from __future__ import annotations

import argparse
import math
import random
from pathlib import Path

import bpy
from mathutils import Vector


IVORY = (0.58, 0.25, 0.31, 1.0)
MEMBRANE = (0.34, 0.045, 0.085, 1.0)
CYTOPLASM = (0.58, 0.10, 0.16, 1.0)
CYTOPLASM_LIGHT = (0.80, 0.20, 0.24, 1.0)
NUCLEUS = (0.20, 0.035, 0.11, 1.0)
NUCLEOLUS = (0.09, 0.008, 0.045, 1.0)
APRICOT = (0.96, 0.48, 0.28, 1.0)
ROSE = (0.93, 0.31, 0.42, 1.0)
CREAM = (1.0, 0.83, 0.61, 1.0)
BACKGROUND = (0.055, 0.012, 0.030, 1.0)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("output_root", type=Path)
    parser.add_argument("--width", type=int, default=1920)
    parser.add_argument("--height", type=int, default=1080)
    parser.add_argument("--samples", type=int, default=96)
    return parser.parse_args(__import__("sys").argv[__import__("sys").argv.index("--") + 1 :])


def clear_scene() -> None:
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for datablocks in (bpy.data.curves, bpy.data.meshes, bpy.data.cameras, bpy.data.lights):
        for datablock in list(datablocks):
            if datablock.users == 0:
                datablocks.remove(datablock)


def material(
    name: str,
    color: tuple[float, float, float, float],
    *,
    roughness: float = 0.68,
    subsurface: float = 0.0,
    emission_strength: float = 0.0,
    noise_scale: float | None = None,
    bump_strength: float = 0.0,
) -> bpy.types.Material:
    mat = bpy.data.materials.get(name) or bpy.data.materials.new(name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    links = mat.node_tree.links
    bsdf = nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = color
    bsdf.inputs["Metallic"].default_value = 0.0
    bsdf.inputs["Roughness"].default_value = roughness
    if "Subsurface Weight" in bsdf.inputs:
        bsdf.inputs["Subsurface Weight"].default_value = subsurface
    if "Subsurface Radius" in bsdf.inputs:
        bsdf.inputs["Subsurface Radius"].default_value = (1.0, 0.45, 0.3)
    if emission_strength:
        bsdf.inputs["Emission Color"].default_value = color
        bsdf.inputs["Emission Strength"].default_value = emission_strength
    if noise_scale is not None:
        texture = nodes.new("ShaderNodeTexNoise")
        texture.inputs["Scale"].default_value = noise_scale
        texture.inputs["Detail"].default_value = 4.0
        texture.inputs["Roughness"].default_value = 0.7
        bump = nodes.new("ShaderNodeBump")
        bump.inputs["Strength"].default_value = bump_strength
        bump.inputs["Distance"].default_value = 0.14
        links.new(texture.outputs["Fac"], bump.inputs["Height"])
        links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])
    return mat


def assign(obj: bpy.types.Object, mat: bpy.types.Material) -> None:
    obj.data.materials.append(mat)


def look_at(obj: bpy.types.Object, target: tuple[float, float, float]) -> None:
    obj.rotation_euler = (Vector(target) - obj.location).to_track_quat("-Z", "Y").to_euler()


def add_camera(
    location: tuple[float, float, float],
    target: tuple[float, float, float],
    lens: float,
) -> bpy.types.Object:
    bpy.ops.object.camera_add(location=location)
    camera = bpy.context.object
    camera.data.lens = lens
    camera.data.sensor_width = 36
    look_at(camera, target)
    bpy.context.scene.camera = camera
    return camera


def add_area_light(
    name: str,
    location: tuple[float, float, float],
    energy: float,
    color: tuple[float, float, float],
    size: float,
    target: tuple[float, float, float] = (0, 0, 0),
) -> None:
    bpy.ops.object.light_add(type="AREA", location=location)
    light = bpy.context.object
    light.name = name
    light.data.energy = energy
    light.data.color = color
    light.data.shape = "DISK"
    light.data.size = size
    look_at(light, target)


def add_world_and_lights() -> None:
    world = bpy.context.scene.world or bpy.data.worlds.new("PAM50 Biology World")
    bpy.context.scene.world = world
    world.use_nodes = True
    background = world.node_tree.nodes.get("Background")
    background.inputs["Color"].default_value = BACKGROUND
    background.inputs["Strength"].default_value = 0.22
    add_area_light("Warm tissue key", (-7.0, -6.0, 11.0), 1450, (1.0, 0.42, 0.32), 6.0)
    add_area_light("Soft fill", (8.0, -1.0, 8.0), 850, (0.80, 0.42, 0.50), 8.0)
    add_area_light("Cellular rim", (1.0, 7.0, 9.0), 1350, (0.52, 0.23, 0.55), 5.0)


def add_blob(
    name: str,
    location: tuple[float, float, float],
    scale: tuple[float, float, float],
    mat: bpy.types.Material,
    *,
    seed: float,
    irregularity: float = 0.06,
    subdivisions: int = 4,
) -> bpy.types.Object:
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=subdivisions, radius=1.0, location=location)
    obj = bpy.context.object
    obj.name = name
    for vertex in obj.data.vertices:
        point = vertex.co.normalized()
        wave = (
            math.sin(point.x * 5.1 + seed)
            + math.sin(point.y * 6.7 + seed * 1.7)
            + math.sin(point.z * 4.3 - seed * 0.9)
        ) / 3.0
        vertex.co *= 1.0 + irregularity * wave
    obj.scale = scale
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    bpy.ops.object.shade_smooth()
    assign(obj, mat)
    return obj


def add_sphere(
    name: str,
    location: tuple[float, float, float],
    scale: tuple[float, float, float],
    mat: bpy.types.Material,
    *,
    segments: int = 24,
) -> bpy.types.Object:
    bpy.ops.mesh.primitive_uv_sphere_add(
        segments=segments,
        ring_count=max(12, segments // 2),
        location=location,
    )
    obj = bpy.context.object
    obj.name = name
    obj.scale = scale
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    bpy.ops.object.shade_smooth()
    assign(obj, mat)
    return obj


def add_curve(
    name: str,
    points: list[tuple[float, float, float]],
    mat: bpy.types.Material,
    bevel_depth: float,
) -> bpy.types.Object:
    curve_data = bpy.data.curves.new(name, "CURVE")
    curve_data.dimensions = "3D"
    curve_data.resolution_u = 3
    curve_data.bevel_depth = bevel_depth
    curve_data.bevel_resolution = 4
    spline = curve_data.splines.new("BEZIER")
    spline.bezier_points.add(len(points) - 1)
    for point, coordinate in zip(spline.bezier_points, points, strict=True):
        point.co = coordinate
        point.handle_left_type = "AUTO"
        point.handle_right_type = "AUTO"
    obj = bpy.data.objects.new(name, curve_data)
    bpy.context.collection.objects.link(obj)
    assign(obj, mat)
    return obj


def add_cell(
    name: str,
    x: float,
    y: float,
    radius: float,
    angle: float,
    mats: dict[str, bpy.types.Material],
    *,
    seed: float,
    focal: bool = False,
) -> dict[str, bpy.types.Object]:
    outer = add_blob(
        f"{name} membrane",
        (x, y, 0.05),
        (radius * 1.10, radius * 0.96, radius * 0.42),
        mats["membrane"],
        seed=seed,
        irregularity=0.13,
    )
    outer.rotation_euler.z = angle
    inner = add_blob(
        f"{name} cytoplasm",
        (x, y, 0.17),
        (radius * 1.01, radius * 0.87, radius * 0.34),
        mats["cytoplasm_light"] if focal else mats["cytoplasm"],
        seed=seed + 2.1,
        irregularity=0.11,
    )
    inner.rotation_euler.z = angle
    nucleus_offset = Vector((math.cos(angle + seed) * radius * 0.16, math.sin(angle + seed) * radius * 0.12, 0))
    nucleus_location = (x + nucleus_offset.x, y + nucleus_offset.y, radius * (0.28 if focal else 0.25) + 0.18)
    nucleus = add_blob(
        f"{name} nucleus",
        nucleus_location,
        (radius * 0.40, radius * 0.33, radius * 0.22),
        mats["nucleus"],
        seed=seed + 4.3,
        irregularity=0.11,
    )
    nucleus.rotation_euler.z = angle * 0.6
    nucleolus = add_sphere(
        f"{name} nucleolus",
        (nucleus_location[0] + radius * 0.07, nucleus_location[1] - radius * 0.035, nucleus_location[2] + radius * 0.17),
        (radius * 0.095, radius * 0.075, radius * 0.055),
        mats["nucleolus"],
        segments=20,
    )
    return {"outer": outer, "inner": inner, "nucleus": nucleus, "nucleolus": nucleolus}


def add_extracellular_fibers(
    mat: bpy.types.Material,
    *,
    count: int,
    seed: int,
    width: float,
    extent: float,
    z: float,
) -> None:
    rng = random.Random(seed)
    for index in range(count):
        y = rng.uniform(-extent * 0.7, extent * 0.7)
        tilt = rng.uniform(-0.24, 0.24)
        phase = rng.uniform(-math.pi, math.pi)
        amplitude = rng.uniform(0.12, 0.34)
        points = []
        for step in range(7):
            x = -extent + 2.0 * extent * step / 6.0
            points.append((x, y + x * tilt + amplitude * math.sin(step * 0.9 + phase), z + 0.02 * step))
        add_curve(f"Extracellular fiber {index + 1:02d}", points, mat, width)


def add_target_signals(
    center: tuple[float, float],
    radius: float,
    z: float,
    mats: list[bpy.types.Material],
) -> None:
    golden_angle = math.pi * (3.0 - math.sqrt(5.0))
    for index in range(50):
        radial = radius * (0.38 + 0.58 * math.sqrt((index + 0.5) / 50.0))
        theta = index * golden_angle
        add_sphere(
            f"PAM50 target signal {index + 1:02d}",
            (
                center[0] + radial * math.cos(theta),
                center[1] + radial * 0.78 * math.sin(theta),
                z + 0.025 * math.sin(index * 1.3),
            ),
            (0.035, 0.035, 0.022),
            mats[index % len(mats)],
            segments=16,
        )


def configure_render(width: int, height: int, samples: int, output: Path) -> None:
    scene = bpy.context.scene
    try:
        scene.render.engine = "BLENDER_EEVEE_NEXT"
    except TypeError:
        scene.render.engine = "BLENDER_EEVEE"
    scene.render.resolution_x = width
    scene.render.resolution_y = height
    scene.render.resolution_percentage = 100
    scene.render.image_settings.file_format = "PNG"
    scene.render.image_settings.color_mode = "RGB"
    scene.render.image_settings.color_depth = "16"
    scene.render.image_settings.compression = 18
    scene.render.film_transparent = False
    scene.render.filepath = str(output)
    scene.render.image_settings.color_management = "FOLLOW_SCENE"
    try:
        scene.view_settings.look = "AgX - Medium High Contrast"
    except TypeError:
        pass
    if hasattr(scene, "eevee"):
        scene.eevee.taa_render_samples = samples
    scene.render.use_file_extension = True


def biology_materials() -> dict[str, bpy.types.Material]:
    return {
        "tissue": material("Extracellular tissue", (0.11, 0.012, 0.035, 1.0), roughness=0.86, noise_scale=5.0, bump_strength=0.25),
        "membrane": material("Cell membrane", MEMBRANE, roughness=0.50, subsurface=0.22, noise_scale=8.0, bump_strength=0.22),
        "cytoplasm": material("Cytoplasm", CYTOPLASM, roughness=0.48, subsurface=0.34, noise_scale=7.0, bump_strength=0.17),
        "cytoplasm_light": material("Focal cytoplasm", CYTOPLASM_LIGHT, roughness=0.46, subsurface=0.36, noise_scale=8.0, bump_strength=0.16),
        "nucleus": material("Nucleus", NUCLEUS, roughness=0.48, subsurface=0.22, noise_scale=9.0, bump_strength=0.26),
        "nucleolus": material("Nucleolus", NUCLEOLUS, roughness=0.58, subsurface=0.08),
        "fiber": material("Extracellular fiber", IVORY, roughness=0.82, subsurface=0.12),
        "rna_apricot": material("RNA signal apricot", APRICOT, roughness=0.74, subsurface=0.08, emission_strength=0.12),
        "rna_rose": material("RNA signal rose", ROSE, roughness=0.74, subsurface=0.08, emission_strength=0.10),
        "rna_cream": material("RNA signal cream", CREAM, roughness=0.78, subsurface=0.08, emission_strength=0.08),
        "chromatin": material("Chromatin fiber", (0.68, 0.29, 0.48, 1.0), roughness=0.82, subsurface=0.08),
    }


def add_tissue_ground(mat: bpy.types.Material, size: float = 28.0) -> None:
    bpy.ops.mesh.primitive_plane_add(size=size, location=(0, 0, -0.18))
    assign(bpy.context.object, mat)


def build_cover(output_root: Path, width: int, height: int, samples: int) -> None:
    clear_scene()
    mats = biology_materials()
    add_world_and_lights()
    add_tissue_ground(mats["tissue"])
    add_extracellular_fibers(mats["fiber"], count=11, seed=41, width=0.008, extent=8.5, z=-0.04)
    camera = add_camera((0.0, -13.8, 7.5), (0.0, 0.15, 0.35), 58)

    rng = random.Random(5002)
    for index in range(28):
        theta = index * math.pi * (3.0 - math.sqrt(5.0))
        radial = 6.6 * math.sqrt((index + 1.8) / 30.0)
        add_cell(
            f"Tumor cell {index + 1:02d}",
            radial * math.cos(theta) * 1.25 + rng.uniform(-0.22, 0.22),
            radial * math.sin(theta) * 0.75 + rng.uniform(-0.18, 0.18),
            rng.uniform(0.62, 0.94),
            rng.uniform(-math.pi, math.pi),
            mats,
            seed=index * 1.37,
        )

    focal = add_cell("Focal tumor cell", 0.0, -0.15, 1.46, math.radians(-12), mats, seed=76.0, focal=True)
    add_target_signals(
        (0.0, -0.15),
        1.27,
        0.83,
        [mats["rna_apricot"], mats["rna_rose"], mats["rna_cream"]],
    )
    camera.data.dof.use_dof = True
    camera.data.dof.focus_object = focal["nucleus"]
    camera.data.dof.aperture_fstop = 4.8
    configure_render(width, height, samples, output_root / "pam50-cover-master.png")
    bpy.ops.wm.save_as_mainfile(filepath=str(output_root / "pam50-cover.blend"))
    bpy.ops.render.render(write_still=True)


def build_method(output_root: Path, width: int, height: int, samples: int) -> None:
    clear_scene()
    mats = biology_materials()
    add_world_and_lights()
    add_tissue_ground(mats["tissue"])
    add_extracellular_fibers(mats["fiber"], count=7, seed=82, width=0.007, extent=9.0, z=-0.06)
    camera = add_camera((0.0, -15.8, 7.1), (0.0, 0.0, 0.72), 61)

    rng = random.Random(96058)
    peripheral_locations = [
        (-6.2, -2.0, 1.35), (-5.8, 2.6, 1.15), (-3.7, 4.3, 1.0), (3.9, 4.2, 1.05),
        (6.1, 2.1, 1.22), (6.4, -2.3, 1.30), (-3.9, -4.2, 1.05), (3.8, -4.3, 1.08),
    ]
    for index, (x, y, radius) in enumerate(peripheral_locations):
        add_cell(
            f"Context cell {index + 1:02d}", x, y, radius, rng.uniform(-math.pi, math.pi), mats, seed=index * 2.8
        )

    focal = add_cell("Gene-expression cell", -0.25, -0.10, 3.0, math.radians(8), mats, seed=50.0, focal=True)
    nucleus_center = focal["nucleus"].location.copy()

    for index in range(12):
        theta = index * math.tau / 12.0
        radial = 0.35 + 0.42 * ((index * 7) % 11) / 10.0
        points = []
        for step in range(5):
            angle = theta + (step - 2) * 0.42
            local_radius = radial * (0.78 + 0.12 * math.sin(step + index))
            points.append(
                (
                    nucleus_center.x + local_radius * math.cos(angle),
                    nucleus_center.y + local_radius * 0.72 * math.sin(angle),
                    nucleus_center.z + 0.36 + 0.04 * math.sin(step * 1.7 + index),
                )
            )
        add_curve(f"Chromatin fiber {index + 1:02d}", points, mats["chromatin"], 0.018)

    rna_materials = [mats["rna_apricot"], mats["rna_rose"], mats["rna_cream"]]
    for index in range(50):
        theta = index * math.pi * (3.0 - math.sqrt(5.0))
        start_radius = 1.15 + 0.10 * math.sin(index * 0.77)
        end_radius = 1.62 + 1.08 * ((index * 13) % 19) / 18.0
        strand_z = nucleus_center.z + 0.34
        start = (
            nucleus_center.x + start_radius * math.cos(theta),
            nucleus_center.y + start_radius * 0.74 * math.sin(theta),
            strand_z + 0.03 * math.sin(index),
        )
        bend_angle = theta + 0.17 * math.sin(index)
        bend = (
            nucleus_center.x + (start_radius + 0.42) * math.cos(bend_angle),
            nucleus_center.y + (start_radius + 0.42) * 0.74 * math.sin(bend_angle),
            strand_z + 0.11 * math.sin(index * 1.31),
        )
        end_angle = theta + 0.24 * math.sin(index * 0.63)
        end = (
            nucleus_center.x + end_radius * math.cos(end_angle),
            nucleus_center.y + end_radius * 0.74 * math.sin(end_angle),
            strand_z + 0.06 * math.cos(index * 0.93),
        )
        mat = rna_materials[index % len(rna_materials)]
        add_curve(f"PAM50 RNA signal strand {index + 1:02d}", [start, bend, end], mat, 0.018)
        add_sphere(f"PAM50 RNA signal end {index + 1:02d}", end, (0.045, 0.045, 0.026), mat, segments=16)

    camera.data.dof.use_dof = True
    camera.data.dof.focus_object = focal["nucleus"]
    camera.data.dof.aperture_fstop = 6.0
    configure_render(width, height, samples, output_root / "pam50-method-master.png")
    bpy.ops.wm.save_as_mainfile(filepath=str(output_root / "pam50-method.blend"))
    bpy.ops.render.render(write_still=True)


def main() -> None:
    args = parse_args()
    args.output_root.mkdir(parents=True, exist_ok=True)
    bpy.context.preferences.filepaths.temporary_directory = str(args.output_root)
    build_cover(args.output_root, args.width, args.height, args.samples)
    build_method(args.output_root, args.width, args.height, args.samples)


if __name__ == "__main__":
    main()
