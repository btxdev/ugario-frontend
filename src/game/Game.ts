import { Point, sumPoints } from './Point.ts'
import { Rect } from './Rect.ts'

export default class Game {
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas
        const context2d: CanvasRenderingContext2D | null = canvas.getContext("2d")
        if (context2d === null) {
            throw new Error('canvas 2d context cannot be null')
        }
        this._context = context2d
        this._render.apply(this)
    }
    private get width(): number {
        return this._canvas.width
    }
    private get w(): number {
        return this.width
    }
    private get height(): number {
        return this._canvas.height
    }
    private get h(): number {
        return this.height
    }
    private get center(): Point {
        return {
            x: Math.round(this.w / 2),
            y: Math.round(this.h / 2)
        }
    }
    private get c(): Point {
        return this.center
    }
    
    private _render() {
        this._context.fillStyle = 'white'
        this._context.fillRect(0, 0, this.w, this.h)
        this._context.fillStyle = 'black'
        const rect = new Rect();
        rect.fromRadiusPoints(this.c, 100);
        this._context.fillRect(...rect.toSizeNumbers())
        requestAnimationFrame(this._render.bind(this))
    }
}