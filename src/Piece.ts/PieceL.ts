import { PieceBase } from "./Piecebase.js";

export class PieceL extends PieceBase {
    constructor() {
        super("L", [
            ["1", "0", "0"],
            ["1", "0", "0"],
            ["1", "1", "0"]
        ]);
    }
}
