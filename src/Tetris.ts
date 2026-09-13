import { Clock } from "./Clock.js";
import { Board } from "./Board.js";
export class Tetris {

    private board: Board;
    private started: boolean = false;
    private clock: Clock;
    private completedLines: number = 0;
    private targetLines: number = 1;
    

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
    hasWon(): boolean {
    return this.board.grid[19]?.every(cell => cell !== null) ?? false;
    }

    hasLost(): boolean {
    return this.board.grid[0]?.every(cell => cell !== null) ?? false;
    }
}