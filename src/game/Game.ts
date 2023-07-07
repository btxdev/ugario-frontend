import { Point, sumPoints } from './Point.ts'
import { Vector, sumVectors } from './Vector'
import { Rect } from './Rect.ts'
import { Ameba } from './Ameba.ts'
import { Food } from './Food.ts'

export default class Game {
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;
    private _player: Ameba;
    private _camera: Point;
    private _food: Array<Food>;
    private _worldBorder: Point;

    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas
        const context2d: CanvasRenderingContext2D | null = canvas.getContext("2d")
        if (context2d === null) {
            throw new Error('canvas 2d context cannot be null')
        }
        this._context = context2d
        this._worldBorder = {x: 1000, y: 1000}
        this._player = new Ameba({
            x: this._worldBorder.x / 2,
            y: this._worldBorder.y / 2
        })
        this._camera = {
            x: this._player.pos.x,
            y: this._player.pos.y,
        }
        this._food = []
        for (let i = 0; i < 10; i++) {
            this._food.push(new Food({
                x: Math.random() * this._worldBorder.x,
                y: Math.random() * this._worldBorder.y,
            }))
        }
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
        // this._context.fillStyle = 'black'
        // const rect = new Rect();
        // rect.fromRadiusPoints(this.c, 100);
        // this._context.fillRect(...rect.toSizeNumbers())
        // const ameba = new Ameba({x: 400, y: 400})
        // this._player.acc = new Vector(0.001, 0.001)

        for (const foodEntity of this._food) {
            foodEntity.renderIn(this._context, this._camera)
        }

        this._player.tick()
        this._player.renderIn(this._context, this._camera)
        requestAnimationFrame(this._render.bind(this))
    }
}