import { Point, sumPoints, diffPoints, rotatePointAround } from './Point'
import { Vector, sumVectors } from './Vector'
import { pointFromCameraView } from './utils.ts'

export class Ameba {
    public pos: Point;
    public vel: Vector;
    public acc: Vector;
    private _animWavePhase0: number;
    private _animWavePhase0Accel: number;
    constructor(pos: Point) {
        this.pos = pos;
        this.vel = new Vector(0, 0)
        this.acc = new Vector(0, 0)
        this._animWavePhase0 = 0;
        this._animWavePhase0Accel = 0.05;
    }
    public tick() {
        this.vel = sumVectors(this.vel, this.acc)
        this.pos = sumPoints(this.pos, this.vel.asPoint)
        this._animWavePhase0 += this._animWavePhase0Accel;
    }
    public renderIn(context: CanvasRenderingContext2D, cam: Point): void {
        context.beginPath()
        const origin = this.pos;
        const radius: number = 100;
        const vertices: number = 48;
        let p0: Point = sumPoints(origin, {x: 0, y: -radius})
        let p0view: Point = pointFromCameraView(p0, cam, context)
        context.moveTo(p0view.x, p0view.y);
        for (let i = 1; i < vertices; i++) {
            const angle = 360 / vertices;
            const p1 = rotatePointAround(p0, origin, angle);
            const directionToCenter = diffPoints(p1, origin);
            let directionVector = new Vector(directionToCenter.x, directionToCenter.y);
            directionVector.multiply(Math.sin(i * 2 + this._animWavePhase0) * 0.05);
            const shiftedPoint = sumPoints(p1, directionVector.asPoint)
            const p1view = pointFromCameraView(shiftedPoint, cam, context);
            context.lineTo(p1view.x, p1view.y);
            p0 = p1;
        }
        context.lineTo(p0view.x, p0view.y);
        context.fillStyle = '#eb7957'
        context.strokeStyle = '#ed4c1c'
        context.lineWidth = 8
        context.fill()
        context.stroke()
        context.closePath()
    }
}