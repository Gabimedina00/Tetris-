import { Clock } from "./Clock.js";
import { Board } from "./Board.js";
import { PieceBase } from "./Piece.ts/Piecebase.js";
export class Tetris {

    private board: Board;
    private started: boolean = false;
    private clock: Clock;
    private lost: boolean = false;
    

    constructor(clock: Clock = new Clock()
, board: Board = new Board()) {
        this.clock = clock;
        this.board = board;
    }

    start(): void {
    this.started = !this.lost;
    }

    state(): boolean {
        return this.started;
    }

    tick(): void {
        this.clock.tick();
        this.board.moveDown();
    }
    hasLost(): boolean {
    return this.lost;
}
    spawnPiece(piece: PieceBase): boolean {
        const entered = this.board.addPiece(piece, 0, 4);

        this.lost = !entered;
        this.started = this.started && entered;

        return entered;
    }
}