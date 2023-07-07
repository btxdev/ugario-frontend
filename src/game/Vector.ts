import { Point } from './Point'
import { clamp, isInRange } from './utils.ts'

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
    get length(): number {
        return Math.sqrt(Math.pow(this._v.x, 2) + Math.pow(this._v.y, 2));
    }
    set length(length: number) {
        const angle = this.radians;
        this._v.x = Math.cos(angle) * length;
        this._v.y = Math.sin(angle) * length;
    }
    addDummy(value: number) {
        this._v.x += value;
        this._v.y += value;
    }
    subtractDummy(value: number) {
        this.addDummy(-value);
    }
    multiplyDummy(multiplier: number) {
        this._v.x *= multiplier;
        this._v.y *= multiplier;
    }
    divideDummy(divider: number) {
        this._v.x /= divider;
        this._v.y /= divider;
    }
    clampDummy(min: number, max: number) {
        this._v.x = clamp(this._v.x, min, max);
        this._v.y = clamp(this._v.y, min, max);
    }
    isInRange(min: number, max: number): boolean {
        return isInRange(this.length, min, max)
    }
    add(value: number) {
        this.length +=  value;
    }
    subtract(value: number) {
        this.length -= value;
    }
    multiply(value: number) {
        this.length *= value;
    }
    divide(value: number) {
        this.length /= value;
    }
    clamp(min: number, max: number) {
        this.length = clamp(this.length, min, max);
    }
}

export function sumVectors(v0: Vector, v1: Vector): Vector {
    return new Vector(v0.value.x + v1.value.x, v0.value.y + v1.value.y);
}

export function diffVectors(v0: Vector, v1: Vector): Vector {
    return new Vector(v0.value.x - v1.value.x, v0.value.y - v1.value.y);
}