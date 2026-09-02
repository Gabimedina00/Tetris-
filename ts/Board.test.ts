import {it, expect} from "vitest";
import { Board } from "../src/Board.js";
import { PieceSquare } from "../src/Piece.ts/Piecesquare.js";
import { PieceBase } from "../src/Piece.ts/Piecebase.js";

it("Un tablero nuevo tiene 20 filas y 10 columnas vacias", () => {
    const board = new Board();
    expect(board.grid.length).toBe(20);
    expect(board.grid[0]?.length).toBe(10);
    expect(board.grid[0]?.[0]).toBeNull();
    })

it("agrega una pieza dentro de los límites del tablero", () => {
    const board = new Board();
    const piece = new PieceSquare();
    const result = board.addPiece(piece, 0, 0);
    expect(result).toBe(true);
});

it("no agrega una pieza que se sale del tablero", () => {
    const board = new Board();
    const piece = new PieceSquare();
    const result = board.addPiece(piece, 0, 9); 
    expect(result).toBe(false);
});

it("mueve la pieza actual una fila hacia abajo si puede", () => {
    const board = new Board();
    const piece = new PieceSquare();
    console.log("forma:", JSON.stringify(piece.getForma()));
    board.addPiece(piece, 0, 0);

    const result = board.moveDown();

    expect(result).toBe(true);
});

it("detecta y elimina una linea completa", () => {
    const board = new Board();
    board.grid[19] = Array(10).fill("Test");

    const cleared = board.clearCompletedLines();

    expect(cleared).toBe(1);
    expect(board.grid[19].every(cell => cell === null)).toBe(true);
});