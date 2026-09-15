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
        expect(board.getCell(1, 0)).toBeNull();
        expect(board.getCell(3, 0)).toBe("Square");
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

    it("pierde cuando una nueva pieza no puede entrar", () => {
    const board = new Board();
    const blockingPiece = new PieceSquare();

    board.addPiece(blockingPiece, 0, 4);
    board.lockPiece();

    const tetris = new Tetris(new Clock(), board);
    tetris.start();

    const entered = tetris.spawnPiece(new PieceSquare());

    expect(entered).toBe(false);
    expect(tetris.hasLost()).toBe(true);
    expect(tetris.state()).toBe(false);});
    
        it("gana cuando completa dos lineas", () => {
    const board = new Board();

    [0, 2, 4, 6].forEach(col => {
        board.addPiece(new PieceSquare(), 17, col);
        board.lockPiece();
    });

    board.addPiece(new PieceSquare(), 17, 8);

    const tetris = new Tetris(new Clock(), board);
    tetris.start();
    tetris.tick();

    expect(tetris.getCompletedLines()).toBe(2);
    expect(tetris.hasWon()).toBe(true);
    expect(tetris.state()).toBe(false);});

});
