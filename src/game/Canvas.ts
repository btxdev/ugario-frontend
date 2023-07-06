export default class Canvas {
    public id: string;
    public width: number;
    public height: number;
    public element: HTMLCanvasElement;
    
    constructor(id: string, width: number, height: number) {
        this.id = id;
        this.width = width;
        this.height = height;
        const canvas: HTMLCanvasElement = document.createElement('canvas')
        canvas.setAttribute('id', this.id)
        canvas.setAttribute('width', String(this.width))
        canvas.setAttribute('height', String(this.height))
        this.element = canvas
    }
}