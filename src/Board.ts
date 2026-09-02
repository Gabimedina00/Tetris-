export class Board {
    public grid: (string | null)[][];

    constructor() {
        this.grid = Array.from({ length: 20 }, () => Array(10).fill(null));
    }
}