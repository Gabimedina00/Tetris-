import {it, expect} from "vitest";
import { Board } from "../src/Board.js";
import { PieceSquare } from "../src/Piece.ts/Piecesquare.js";
import { PieceBase } from "../src/Piece.ts/Piecebase.js";

it("Un tablero nuevo tiene 20 filas y 10 columnas vacias", () => {
    const board = new Board();
    expect(board.getRowCount()).toBe(20);
    expect(board.getColumnCount()).toBe(10);
    expect(board.getCell(0, 0)).toBeNull();
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

it("detecta y elimina lineas completas", () => {
    const board = new Board();

    [0, 2, 4, 6, 8].forEach(col => {
        board.addPiece(new PieceSquare(), 17, col);
        board.lockPiece();
    });

    const cleared = board.clearCompletedLines();

    expect(cleared).toBe(2);
    expect(board.getCell(19, 0)).toBeNull();
});