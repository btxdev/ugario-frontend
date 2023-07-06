import { Point } from './Point'

export interface IRect {
    x0: number;
    y0: number;
    x1: number;
    y1: number;
}

export class Rect {
    public rect: IRect;
    constructor();
    constructor(rect: IRect);
    constructor(rect?: IRect) {
        this.rect = rect ?? {
            x0: 0,
            y0: 0,
            x1: 0,
            y1: 0
        };
    }
    fromNumbers(x0: number, y0: number, x1: number, y1: number) {
        this.rect = {
            x0: x0,
            y0: y0,
            x1: x1,
            y1: y1
        };
    }
    fromSizeNumbers(x: number, y: number, width: number, height: number) {
        this.fromNumbers(x, y, x + width, y + height);
    }
    fromRadiusNumbers(x: number, y: number, radius: number) {
        this.fromNumbers(x - radius, y - radius, x + radius, y + radius);
    }
    fromDiameterNumbers(x: number, y: number, diameter: number) {
        const radius: number = Math.round(diameter / 2);
        this.fromRadiusNumbers(x, y, radius)
    }
    fromPoints(p0: Point, p1: Point) {
        this.fromNumbers(p0.x, p0.y, p1.x, p1.y);
    }
    fromRadiusPoints(p: Point, radius: number) {
        const {x, y} = p
        this.fromRadiusNumbers(x, y, radius)
    }
    fromDiameterPoints(p: Point, diameter: number) {
        const {x, y} = p
        this.fromDiameterNumbers(x, y, diameter)
    }
    toSizeNumbers(): [number, number, number, number] {
        return [
            this.rect.x0,
            this.rect.y0,
            this.width,
            this.height
        ]
    }
    public get p0(): Point {
        return {
            x: this.rect.x0,
            y: this.rect.y0,
        }
    }
    public get p1(): Point {
        return {
            x: this.rect.x1,
            y: this.rect.y1,
        }
    }
    public get width(): number {
        return Math.abs(this.rect.x1 - this.rect.x0)
    }
    public get w(): number {
        return this.width
    }
    public get height(): number {
        return Math.abs(this.rect.y1 - this.rect.y0)
    }
    public get h(): number {
        return this.height
    }
    public get center(): Point {
        return {
            x: this.w / 2,
            y: this.h / 2
        }
    }
    public get c(): Point {
        return this.center
    }
}