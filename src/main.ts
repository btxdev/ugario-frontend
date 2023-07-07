import './styles/main.css'

import Canvas from './game/Canvas.ts'
import Game from './game/Game.ts'

const canvas = new Canvas('canvas', document.body.clientWidth, document.body.clientHeight)
canvas.element.style.position = 'absolute';
canvas.element.style.top = '0';
canvas.element.style.left = '0';
document.querySelector<HTMLDivElement>('#app')?.appendChild(canvas.element)
window.addEventListener('resize', (e: UIEvent) => {
    const element = e.target as Window
    canvas.width = element.innerWidth || 640
    canvas.height = element.innerHeight || 480
})

const game = new Game(canvas.element)
