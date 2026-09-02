

import { Clock } from "./Clock.js";

export class Tetris {
    private started: boolean = false;
    private clock: Clock;

    constructor(clock: Clock = new Clock()) {
        this.clock = clock;
    }

    start(): void {
        this.started = true;
    }

    state(): boolean {
        return this.started;
    }

    tick(): void {
        this.clock.tick();
    }
}