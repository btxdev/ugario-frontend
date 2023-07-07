import { Point } from "./Point"

export function pointFromCameraView(p: Point, cam: Point, ctx: CanvasRenderingContext2D): Point {
    return {
        x: ctx.canvas.width / 2 + p.x - cam.x,
        y: ctx.canvas.height / 2 + p.y - cam.y,
    }
}

export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max)
}

export function isInRange(value: number, min: number, max: number): boolean {
    return (value >= min) && (value <= max)
}