import { Point } from './Point'

export interface IVector {
    x: number;
    y: number;
}

export class Vector {
    private _v: IVector;
    constructor(x: number, y: number) {
        this._v = {
            x: x,
            y: y
        };
    }
    get value() {
        return this._v;
    }
    get asPoint(): Point {
        return {
            x: this._v.x,
            y: this._v.y,
        }
    }
    get radians(): number {
        return Math.atan2(this._v.y, this._v.x);
    }
    set radians(radians: number) {
        this._v = {
            x: Math.cos(radians),
            y: Math.sin(radians),
        }
    }
    get degrees(): number {
        const degrees: number = 180 * this.radians / Math.PI;
        return (360 + Math.round(degrees)) % 360;
    }
    set degrees(degrees: number) {
        this.radians = degrees * Math.PI / 180;
    }
    multiply(multiplier: number) {
        this._v.x *= multiplier;
        this._v.y *= multiplier;
    }
}

export function sumVectors(v0: Vector, v1: Vector): Vector {
    return new Vector(v0.value.x + v1.value.x, v0.value.y + v1.value.y);
}