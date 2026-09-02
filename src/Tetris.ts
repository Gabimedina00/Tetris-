import { Clock } from "./Clock.js";
import { Board } from "./Board.js";
export class Tetris {

    private board: Board;
    private started: boolean = false;
    private clock: Clock;

    constructor(clock: Clock = new Clock()
, board: Board = new Board()) {
        this.clock = clock;
        this.board = board;
    }

    start(): void {
        this.started = true;
    }

    state(): boolean {
        return this.started;
    }

    tick(): void {
        this.clock.tick();
        this.board.moveDown();
    }
}