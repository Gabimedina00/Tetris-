import { PieceBase } from './Piecebase.js';

export class PieceT extends PieceBase {
    constructor() {
        super("T", [
            ["1", "1", "1"],
            ["0", "1", "0"],
            ["0", "1", "0"]
        ]);
    }
}