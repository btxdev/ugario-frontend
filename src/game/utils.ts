import { Point } from "./Point"

export function pointFromCameraView(p: Point, cam: Point, ctx: CanvasRenderingContext2D): Point {
    return {
        x: ctx.canvas.width / 2 + p.x - cam.x,
        y: ctx.canvas.height / 2 + p.y - cam.y,
    }
}