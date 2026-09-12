"""Render conceptual NAS-BRCA-002 PAM50 cover and method artwork in Blender.

The geometry is explanatory, not an observed molecule or empirical data plot:
50 elements represent the fixed gene panel, five rings/lenses represent the fixed
subtype references, and paired fields represent repeat measurements.
"""

from __future__ import annotations

import argparse
import math
from pathlib import Path

import bpy
from mathutils import Vector

GOLD = (0.83, 0.58, 0.24, 1.0)
PALE_GOLD = (1.0, 0.80, 0.48, 1.0)
CHARCOAL = (0.009, 0.008, 0.007, 1.0)
SMOKE = (0.045, 0.040, 0.035, 1.0)


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
    for datablocks in (bpy.data.curves, bpy.data.meshes, bpy.data.materials, bpy.data.cameras, bpy.data.lights):
        if datablocks is not bpy.data.materials:
            for datablock in list(datablocks):
                if datablock.users == 0:
                    datablocks.remove(datablock)


def material(
    name: str,
    color: tuple[float, float, float, float],
    *,
    metallic: float = 0.0,
    roughness: float = 0.3,
    transmission: float = 0.0,
    emission_strength: float = 0.0,
) -> bpy.types.Material:
    mat = bpy.data.materials.get(name) or bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = color
    bsdf.inputs["Metallic"].default_value = metallic
    bsdf.inputs["Roughness"].default_value = roughness
    if "Transmission Weight" in bsdf.inputs:
        bsdf.inputs["Transmission Weight"].default_value = transmission
    if "Coat Weight" in bsdf.inputs:
        bsdf.inputs["Coat Weight"].default_value = 0.28
    if emission_strength:
        bsdf.inputs["Emission Color"].default_value = color
        bsdf.inputs["Emission Strength"].default_value = emission_strength
    return mat


def assign(obj: bpy.types.Object, mat: bpy.types.Material) -> None:
    obj.data.materials.append(mat)


def look_at(obj: bpy.types.Object, target: tuple[float, float, float]) -> None:
    direction = Vector(target) - obj.location
    obj.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()


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
    world = bpy.context.scene.world or bpy.data.worlds.new("PAM50 World")
    bpy.context.scene.world = world
    world.use_nodes = True
    background = world.node_tree.nodes.get("Background")
    background.inputs["Color"].default_value = CHARCOAL
    background.inputs["Strength"].default_value = 0.16
    add_area_light("Key", (-7.5, -7.0, 10.0), 1400, (1.0, 0.70, 0.38), 6.0)
    add_area_light("Softbox", (8.0, -2.0, 6.0), 1050, (0.72, 0.80, 1.0), 7.0)
    add_area_light("Rim", (0.0, 5.5, 9.0), 1800, (1.0, 0.47, 0.16), 4.0)


def add_ground(mat: bpy.types.Material) -> None:
    bpy.ops.mesh.primitive_plane_add(size=34, location=(0, 0, -1.2))
    ground = bpy.context.object
    assign(ground, mat)


def add_sphere(
    name: str,
    location: tuple[float, float, float],
    scale: tuple[float, float, float],
    mat: bpy.types.Material,
    *,
    segments: int = 32,
) -> bpy.types.Object:
    bpy.ops.mesh.primitive_uv_sphere_add(
        segments=segments,
        ring_count=max(16, segments // 2),
        location=location,
    )
    obj = bpy.context.object
    obj.name = name
    obj.scale = scale
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    bpy.ops.object.shade_smooth()
    assign(obj, mat)
    return obj


def add_torus(
    name: str,
    location: tuple[float, float, float],
    major_radius: float,
    minor_radius: float,
    mat: bpy.types.Material,
    rotation: tuple[float, float, float] = (0, 0, 0),
) -> bpy.types.Object:
    bpy.ops.mesh.primitive_torus_add(
        major_radius=major_radius,
        minor_radius=minor_radius,
        major_segments=128,
        minor_segments=16,
        location=location,
        rotation=rotation,
    )
    obj = bpy.context.object
    obj.name = name
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
    curve_data.resolution_u = 2
    curve_data.bevel_depth = bevel_depth
    curve_data.bevel_resolution = 3
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


def fibonacci_disc(index: int, count: int, radius: float) -> tuple[float, float]:
    golden_angle = math.pi * (3.0 - math.sqrt(5.0))
    r = radius * math.sqrt((index + 0.7) / count)
    theta = index * golden_angle
    return r * math.cos(theta), r * math.sin(theta)


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
    scene.render.engine = scene.render.engine
    if hasattr(scene, "eevee"):
        scene.eevee.taa_render_samples = samples
    scene.render.use_file_extension = True


def build_cover(output_root: Path, width: int, height: int, samples: int) -> None:
    clear_scene()
    gold = material("Satin Gold", GOLD, metallic=0.92, roughness=0.19)
    pale = material("Pale Gold Light", PALE_GOLD, metallic=0.58, roughness=0.16, emission_strength=0.34)
    dark = material("Obsidian", SMOKE, metallic=0.72, roughness=0.24)
    glass = material("Smoked Glass", (0.18, 0.12, 0.07, 1), roughness=0.12, transmission=0.68)
    add_world_and_lights()
    add_ground(dark)
    camera = add_camera((0.0, -14.8, 8.4), (0.0, 0.0, 0.25), 56)

    for ring_index, radius in enumerate((1.45, 2.15, 2.9, 3.65, 4.4), start=1):
        add_torus(
            f"Fixed subtype reference {ring_index}",
            (0.0, 0.55 + ring_index * 0.07, -0.08 + ring_index * 0.08),
            radius,
            0.026 + ring_index * 0.004,
            glass if ring_index < 5 else gold,
            rotation=(math.radians(7), math.radians(-4), math.radians(ring_index * 4 - 10)),
        )

    for index in range(50):
        x, y = fibonacci_disc(index, 50, 4.35)
        z = -0.62 + 0.22 * math.sin(index * 1.73) + 0.075 * (4.35 - math.hypot(x, y))
        height_scale = 0.16 + 0.16 * ((index * 17) % 11) / 10
        node = add_sphere(
            f"PAM50 gene element {index + 1:02d}",
            (x, y * 0.92, z + height_scale),
            (0.14 + 0.025 * (index % 3), 0.14 + 0.025 * (index % 3), height_scale),
            pale if index % 10 == 0 else gold,
            segments=28,
        )
        node.rotation_euler.z = math.atan2(y, x) * 0.08

    central_lens = add_sphere("Central lens", (0, 0.15, 0.42), (0.7, 0.7, 0.17), glass, segments=64)
    add_torus("Central gold aperture", (0, 0.0, 0.43), 0.78, 0.055, pale, rotation=(math.radians(6), 0, 0))
    camera.data.dof.use_dof = True
    camera.data.dof.focus_object = central_lens
    camera.data.dof.aperture_fstop = 6.3
    configure_render(width, height, samples, output_root / "pam50-cover-master.png")
    bpy.ops.wm.save_as_mainfile(filepath=str(output_root / "pam50-cover.blend"))
    bpy.ops.render.render(write_still=True)


def build_method(output_root: Path, width: int, height: int, samples: int) -> None:
    clear_scene()
    gold = material("Satin Gold", GOLD, metallic=0.9, roughness=0.2)
    bright = material("Signal Gold", PALE_GOLD, metallic=0.45, roughness=0.13, emission_strength=0.48)
    dark = material("Obsidian", SMOKE, metallic=0.72, roughness=0.25)
    glass = material("Optical Glass", (0.15, 0.10, 0.055, 1), roughness=0.08, transmission=0.78)
    thread = material("Repeat Threads", (0.42, 0.23, 0.08, 1), metallic=0.2, roughness=0.3, emission_strength=0.12)
    add_world_and_lights()
    bpy.ops.mesh.primitive_plane_add(size=34, location=(0, 3.0, 0), rotation=(math.pi / 2, 0, 0))
    assign(bpy.context.object, dark)
    add_camera((0.0, -18.6, 1.1), (0.0, 0.3, 0.25), 59)

    left_center = (-4.15, 0.25, 0.25)
    right_center = (4.15, 0.25, 0.25)
    for name, center in (("Repeat profile A", left_center), ("Repeat profile B", right_center)):
        add_torus(name + " boundary", center, 3.15, 0.055, glass, rotation=(math.pi / 2, 0, 0))
        add_torus(name + " gold rim", center, 2.88, 0.018, gold, rotation=(math.pi / 2, 0, 0))

    left_points: list[tuple[float, float, float]] = []
    right_points: list[tuple[float, float, float]] = []
    for index in range(50):
        dx, dz = fibonacci_disc(index, 50, 2.65)
        left = (left_center[0] + dx, left_center[1], left_center[2] + dz)
        right = (right_center[0] + dx, right_center[1], right_center[2] + dz)
        left_points.append(left)
        right_points.append(right)
        node_mat = bright if index in {3, 13, 23, 33, 43} else gold
        add_sphere(f"Profile A gene {index + 1:02d}", left, (0.09, 0.075, 0.09), node_mat, segments=24)
        add_sphere(f"Profile B gene {index + 1:02d}", right, (0.09, 0.075, 0.09), node_mat, segments=24)

    for index, (left, right) in enumerate(zip(left_points, right_points, strict=True)):
        arch = 0.45 + 0.45 * math.sin(index * 0.57)
        add_curve(
            f"Gene correspondence {index + 1:02d}",
            [left, (0.0, 0.75 + arch, (left[2] + right[2]) / 2), right],
            bright if index in {3, 13, 23, 33, 43} else thread,
            0.012 if index in {3, 13, 23, 33, 43} else 0.0045,
        )

    for index, z in enumerate((-1.6, -0.8, 0.0, 0.8, 1.6), start=1):
        add_torus(
            f"Fixed centroid lens {index}",
            (0.0, 1.25, z + 0.25),
            0.31,
            0.035,
            bright if index == 3 else glass,
            rotation=(math.pi / 2, 0, 0),
        )
        add_sphere(
            f"Fixed centroid core {index}",
            (0.0, 1.28, z + 0.25),
            (0.10, 0.055, 0.10),
            bright if index == 3 else gold,
            segments=24,
        )

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
