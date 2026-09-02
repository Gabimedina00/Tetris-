import { describe, expect, it } from "vitest";
import { Tetris } from "../src/Tetris.js";

describe("Tetris", () => {
    it("se puede crear un juego", () => {
        const tetris = new Tetris();

        expect(tetris).toBeInstanceOf(Tetris);
    });

    it("comienza detenido", () => {
        const tetris = new Tetris();

        expect(tetris.state()).toBe(false);
    });

    it("puede comenzar el juego", () => {
        const tetris = new Tetris();

        tetris.start();

        expect(tetris.state()).toBe(true);
    });
});