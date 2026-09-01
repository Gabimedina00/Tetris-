import { describe, expect, it } from "vitest";
import { Clock } from "../src/Clock.js";

describe("Clock", () => {
    it("comienza con cero ticks", () => {
        const clock = new Clock();

        expect(clock.getTicks()).toBe(0);
    });

    it("avanza uno cada vez que se ejecuta tick", () => {
        const clock = new Clock();

        clock.tick();
        expect(clock.getTicks()).toBe(1);

        clock.tick();
        expect(clock.getTicks()).toBe(2);

        clock.tick();
        expect(clock.getTicks()).toBe(3);
    });
});