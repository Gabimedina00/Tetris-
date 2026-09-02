import { PieceBase } from "../src/Piece.ts/Piecebase.js";

export class Board {
    public grid: (string | null)[][];

    constructor() {
        this.grid = Array.from({ length: 20 }, () => Array(10).fill(null));
    }

    addPiece(piece: PieceBase, row: number, col: number): boolean {
        const forma = piece.getForma();

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (forma[i][j] === "1") {
                    const targetRow = row + i;
                    const targetCol = col + j;

                    if (targetRow < 0 || targetRow >= 20 || targetCol < 0 || targetCol >= 10) {
                        return false;
                    }
                }
            }
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (forma[i][j] === "1") {
                    this.grid[row + i][col + j] = piece.name;
                }
            }
        }

        return true;
    }
}