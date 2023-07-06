import './styles/main.css'

import Canvas from './game/Canvas.ts'
import Game from './game/Game.ts'

const canvas = new Canvas('canvas', screen.width, screen.height)
document.querySelector<HTMLDivElement>('#app')?.appendChild(canvas.element)

const game = new Game(canvas.element)
