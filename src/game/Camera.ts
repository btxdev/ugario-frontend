import { Point } from './Point'

export interface ICamera {
    p: Point,
    fov: number
}

export class Camera {
    private _p: Point
    private _fov: number
    private _targetFov: number
    constructor(x: number, y: number, fov: number) {
        this._p = {
            x: x,
            y: y,
        }
        this._fov = fov
        this._targetFov = fov
        this.fov = fov
    }
    update() {
        const diff: number = this._fov - this._targetFov
        this._fov += -diff * 0.01
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
    get fov() {
        return this._fov
    }
    set fov(value: number) {
        this._targetFov = value
    }
}