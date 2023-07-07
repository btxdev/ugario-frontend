import { Point, sumPoints, diffPoints } from './Point.ts'
import { Vector, sumVectors } from './Vector'
import { Camera } from './Camera'
import { Rect } from './Rect.ts'
import { Ameba } from './Ameba.ts'
import { Food } from './Food.ts'

export default class Game {
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;
    private _player: Ameba;
    private _camera: Camera;
    private _food: Array<Food>;
    private _worldBorder: Point;
    private _mouseMove: any;
    private _mouse: Point;

    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas
        const context2d: CanvasRenderingContext2D | null = canvas.getContext("2d")
        if (context2d === null) {
            throw new Error('canvas 2d context cannot be null')
        }
        this._context = context2d
        this._worldBorder = {x: 5000, y: 5000}
        this._player = new Ameba({
            x: this._worldBorder.x / 2,
            y: this._worldBorder.y / 2
        })
        this._camera = new Camera(this._player.pos.x, this._player.pos.y, 1);
        this._food = []
        for (let i = 0; i < 50; i++) {
            this._food.push(new Food({
                x: Math.random() * this._worldBorder.x,
                y: Math.random() * this._worldBorder.y,
            }))
        }
        this._mouse = {x: 0, y: 0}
        this._mouseMove = this._canvas.addEventListener('mousemove', this._handleMousemove.bind(this))
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

    private _handleMousemove(event: MouseEvent): void {
        this._mouse.x = event.clientX
        this._mouse.y = event.clientY
    }
    
    private _render() {
        // background
        this._context.fillStyle = 'white'
        this._context.fillRect(0, 0, this.w, this.h)

        // player movement
        const mouseDirPoint = diffPoints(this.center, this._mouse);
        let mouseDir = new Vector(mouseDirPoint.x, mouseDirPoint.y);
        mouseDir.clampDummy(-500, 500)
        if (mouseDir.isInRange(0, 100)) mouseDir = new Vector(0, 0);
        mouseDir.divide(500)
        this._player.moveTo(mouseDir)
        // console.log(mouseDir.asPoint)
        // mouseDir.multiply(-1)
        // mouseDir.multiply(0.0004)
        // this._player.targetVelocity = mouseDir;

        // camera movement
        // const camDirPoint = diffPoints(this._camera, this._player.pos);
        // const camDir = new Vector(camDirPoint.x, camDirPoint.y);
        // camDir.multiplyDummy(-0.1)
        // this._camera.x += camDir.asPoint.x
        // this._camera.y += camDir.asPoint.y
        this._camera.p = this._player.pos

        // logic
        this._player.tick()

        // draw food
        for (const foodEntity of this._food) {
            foodEntity.renderIn(this._context, this._camera)
        }

        // draw player
        this._player.renderIn(this._context, this._camera)
        
        requestAnimationFrame(this._render.bind(this))
    }
}