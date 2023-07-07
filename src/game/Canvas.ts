export default class Canvas {
    public id: string;
    private _width: number;
    private _height: number;
    public element: HTMLCanvasElement;
    
    constructor(id: string, width: number, height: number) {
        this.id = id;
        this._width = width;
        this._height = height;
        const canvas: HTMLCanvasElement = document.createElement('canvas')
        canvas.setAttribute('id', this.id)
        canvas.setAttribute('width', String(this.width))
        canvas.setAttribute('height', String(this.height))
        canvas.setAttribute('class', 'canvas')
        this.element = canvas
    }

    set width(value: number) {
        this._width = value;
        this.element.setAttribute('width', String(value))
    }
    get width(): number {
        return this._width;
    }
    set height(value: number) {
        this._height = value;
        this.element.setAttribute('height', String(value))
    }
    get height(): number {
        return this._height;
    }
}