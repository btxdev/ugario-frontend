import { Point } from "./Point"
import { Camera } from "./Camera"

export function pointFromCameraView(p: Point, cam: Camera, ctx: CanvasRenderingContext2D): Point {
    return {
        x: ctx.canvas.width / 2 + (p.x - cam.p.x) * cam.fov,
        y: ctx.canvas.height / 2 + (p.y - cam.p.y) * cam.fov,
    }
}

export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max)
}

export function isInRange(value: number, min: number, max: number): boolean {
    return (value >= min) && (value <= max)
}