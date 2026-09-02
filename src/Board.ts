import { PieceBase } from "../src/Piece.ts/Piecebase.js";

export class Board {
    public grid: (string | null)[][];
    private currentPiece: PieceBase | null = null;
    private currentRow: number = 0;
    private currentCol: number = 0;

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

        this.currentPiece = piece;
        this.currentRow = row;
        this.currentCol = col;

        return true;
    }

    private clearPiece(): void {
        if (!this.currentPiece) return;
        const forma = this.currentPiece.getForma();

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (forma[i][j] === "1") {
                    this.grid[this.currentRow + i][this.currentCol + j] = null;
                }
            }
        }
    }

    moveDown(): boolean {
    if (!this.currentPiece) return false;
    const forma = this.currentPiece.getForma();
    const piece = this.currentPiece;
    const oldRow = this.currentRow;
    const oldCol = this.currentCol;

    this.clearPiece(); // saco la pieza del tablero antes de validar

    let canMove = true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (forma[i][j] === "1") {
                const newRow = oldRow + 1 + i;
                const col = oldCol + j;
                if (newRow >= 20 || this.grid[newRow][col] !== null) {
                    canMove = false;
                }
            }
        }
    }

    if (canMove) {
        this.addPiece(piece, oldRow + 1, oldCol);
    } else {
        this.addPiece(piece, oldRow, oldCol); 
    }

    return canMove;
}
}