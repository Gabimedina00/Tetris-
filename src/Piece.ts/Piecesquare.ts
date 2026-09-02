import {PieceBase } from "./Piecebase.js"

export class PieceSquare extends PieceBase {
    constructor() {
        super("Square", [
            ["0", "0","0"],
            ["1", "1","0"],
            ["1", "1", "0"]
        ]);
    }
}
