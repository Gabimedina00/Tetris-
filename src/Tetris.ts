import { Clock } from "./Clock.js";
import { Board } from "./Board.js";
import { PieceBase } from "./Piece.ts/Piecebase.js";
export class Tetris {

    private board: Board;
    private started: boolean = false;
    private clock: Clock;
    private lost: boolean = false;
    private won: boolean = false;
    private completedLines: number = 0;

    constructor(clock: Clock = new Clock()
, board: Board = new Board()) {
        this.clock = clock;
        this.board = board;
    }

    start(): void {
    this.started = !this.lost && !this.won;
    }

    state(): boolean {
        return this.started;
    }

    tick(): void {
    const gameRunning = !this.lost && !this.won;

    gameRunning && this.advanceGame();
}

private advanceGame(): void {
    this.clock.tick();

    this.board.hasActivePiece() &&
        (this.board.moveDown() || this.finishPiece());
}

private finishPiece(): boolean {
    this.board.lockPiece();

    const clearedLines = this.board.clearCompletedLines();
    this.completedLines += clearedLines;

    this.won = this.completedLines >= 2;
    this.started = this.started && !this.won;

    return true;
}
    hasLost(): boolean {
    return this.lost;
}

hasWon(): boolean {
    return this.won;
}

getCompletedLines(): number {
    return this.completedLines;
}

spawnPiece(piece: PieceBase): boolean {
    const gameRunning = !this.lost && !this.won;

    const entered =
        gameRunning && this.board.addPiece(piece, 0, 4);

    this.lost =
        this.lost || (gameRunning && !entered);

    this.started = this.started && entered;

    return entered;
}
}