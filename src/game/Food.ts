import { Point, sumPoints, rotatePointAround } from './Point'
import { Camera } from "./Camera"

import { pointFromCameraView } from './utils.ts'

export class Food {
    public pos: Point;
    public colorAngle: number;
    public radius: number;
    constructor(pos: Point) {
        this.pos = pos;
        this.colorAngle = Math.round(Math.random() * 360)
        this.radius = 20;
    }
    public renderIn(context: CanvasRenderingContext2D, cam: Camera): void {
        context.beginPath()
        const origin = this.pos;
        const radius: number = this.radius;
        const vertices: number = 8;
        let p0: Point = sumPoints(origin, {x: 0, y: -radius})
        let p0view: Point = pointFromCameraView(p0, cam, context)
        context.moveTo(p0view.x, p0view.y);
        for (let i = 1; i < vertices; i++) {
            const angle = 360 / vertices;
            const p1 = rotatePointAround(p0, origin, angle);
            const p1view = pointFromCameraView(p1, cam, context);
            context.lineTo(p1view.x, p1view.y);
            p0 = p1;
        }
        context.lineTo(p0view.x, p0view.y);
        context.fillStyle = `hsl(${this.colorAngle}, 79%, 63%)`
        context.strokeStyle = `hsl(${this.colorAngle}, 85%, 52%)`
        context.lineWidth = cam.fov * 6
        context.fill()
        context.stroke()
        context.closePath()
    }
}