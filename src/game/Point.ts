export interface Point {
    x: number;
    y: number;
}

export function sumPoints(a: Point, b: Point): Point {
    return {
        x: a.x + b.x,
        y: a.y + b.y,
    }
}