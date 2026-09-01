import { PieceBase } from "./Piecebase.js";

export class PieceDog extends PieceBase {
    constructor() {
        super("Dog", [
            ["1", "1", "0"],
            ["0", "1", "0"],
            ["0", "1", "1"]
        ]);
    }
}