export class Heatmap {
    private _map: number[][];
    private _resolution: number;
    constructor(xBorder: number, yBorder: number, resolution: number) {
        this._resolution = resolution;
        const xCells: number = this._getCell(xBorder) + 1;
        const yCells: number = this._getCell(yBorder) + 1;
        this._map = [];
        for (let x = 0; x < xCells; x++) {
            this._map[x] = [];
            for (let y = 0; y < yCells; y++) {
                this._map[x][y] = 0;
            }
        }
    }
    private _getCell(coord: number): number {
        return Math.trunc(coord / this._resolution);
    }
}