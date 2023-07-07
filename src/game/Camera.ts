import { Point } from './Point'

export interface ICamera {
    p: Point,
    fov: number
}

export class Camera {
    private _p: Point
    public fov: number
    constructor(x: number, y: number, fov: number) {
        this._p = {
            x: x,
            y: y,
        }
        this.fov = fov
    }
    get p(): Point {
        return this._p
    }
    set p(value: Point) {
        this._p = value
    }
    get x(): number {
        return this._p.x
    }
    get y(): number {
        return this._p.y
    }
}