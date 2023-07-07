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

export function diffPoints(a: Point, b: Point): Point {
    return {
        x: a.x - b.x,
        y: a.y - b.y,
    }
}

export function rotatePointAround(target: Point, origin: Point, degrees: number): Point {
    const radians: number = (Math.PI / 180) * degrees;
    const cos: number = Math.cos(radians);
    const sin: number = Math.sin(radians);
    const nx: number = (cos * (target.x - origin.x)) + (sin * (target.y - origin.y)) + origin.x;
    const ny: number = (cos * (target.y - origin.y)) - (sin * (target.x - origin.x)) + origin.y;
    return {
        x: nx,
        y: ny,
    };
}

export function rotatePoint(p: Point, degrees: number): Point {
    return rotatePointAround(p, {x: 0, y: 0}, degrees);
}