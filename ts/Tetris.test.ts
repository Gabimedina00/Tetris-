import { describe, expect, it } from "vitest";
import { Tetris } from "../src/Tetris.js";
import {Clock} from "../src/Clock.js";
import { Board } from "../src/Board.js";
import { PieceSquare } from "../src/Piece.ts/Piecesquare.js";

describe("Tetris", () => {

    it("Baja la pieza del tablero cuando recibe un tick", () =>{
        const clock = new Clock();
        const board = new Board();
        const piece = new PieceSquare();

        board.addPiece(piece, 0, 0);
        const tetris = new Tetris(clock, board);
        tetris.tick();
        expect(board.grid[1]?.[0]).toBeNull();
        expect(board.grid[3]?.[0]).toBe("Square");
    });

    it("Se puede crear un juego", () => {
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

    it("avanza el reloj cuando recibe un tick", () => {
        const clock = new Clock();
        const tetris = new Tetris(clock);

        tetris.tick();

        expect(clock.getTicks()).toBe(1);
    });
    it("avanza el reloj varias veces cuando recibe varios ticks", () => {
        const clock = new Clock();
        const tetris = new Tetris(clock);  
        tetris.tick();
        tetris.tick();
        tetris.tick();
        expect(clock.getTicks()).toBe(3);})
});

it("Gana cuando completa la ultima fila", () => {
    const board = new Board();

    board.grid[19] = Array(10).fill("Square");

    const tetris = new Tetris(new Clock(), board);

    expect(tetris.hasWon()).toBe(true);
});

it("Pierde cuando se completa la primera fila", () => {
    const board = new Board();

    board.grid[0] = Array(10).fill("Square");

    const tetris = new Tetris(new Clock(), board);

    expect(tetris.hasLost()).toBe(true);
})