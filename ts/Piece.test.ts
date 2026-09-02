import { describe, expect, it } from "vitest";
import { PieceT } from "../src/Piece.ts/PieceT.js";
import { pieceStick } from "../src/Piece.ts/PieceStick.js";
import { PieceSquare } from "../src/Piece.ts/Piecesquare.js";
import { PieceL } from "../src/Piece.ts/PieceL.js";
import { PieceDog } from "../src/Piece.ts/PieceDog.js";
describe("PieceT", () => {
it("tiene la forma correcta al crearse", () => {
    const pieza = new PieceT();

    expect(pieza.getForma()).toEqual([
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["0", "0", "0"],
    ]);
});

it("rota correctamente hacia la derecha", () => {
    const pieza = new PieceT();

    pieza.rotateRight();

    expect(pieza.getForma()).toEqual([
    ["0", "0", "1"],
    ["0", "1", "1"],
    ["0", "0", "1"],
    ]);
});

it("rota correctamente hacia la izquierda", () => {
    const pieza = new PieceT();

    pieza.rotateLeft();

    expect(pieza.getForma()).toEqual([
    ["1", "0", "0"],
    ["1", "1", "0"],
    ["1", "0", "0"],
    ]);
});

it("vuelve a la forma original después de 4 rotaciones", () => {
    const pieza = new PieceT();

    pieza.rotateRight();
    pieza.rotateRight();
    pieza.rotateRight();
    pieza.rotateRight();

    expect(pieza.getForma()).toEqual([
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["0", "0", "0"],
    ]);
});
});
describe("PieceStick", () => {
it("tiene la forma correcta al crearse", () => {
    const pieza = new pieceStick();
    expect(pieza.getForma()).toEqual([
    ["0", "1", "0"],
    ["0", "1", "0"],
    ["0", "1", "0"],
    ]);
});

it("rota correctamente hacia la derecha", () => {
    const pieza = new pieceStick();
    pieza.rotateRight();
    expect(pieza.getForma()).toEqual([
    ["0", "0", "0"],
    ["1", "1", "1"],
    ["0", "0", "0"],
    ]);
});

it("rota correctamente hacia la izquierda", () => {
    const pieza = new pieceStick();
    pieza.rotateLeft();
    expect(pieza.getForma()).toEqual([
    ["0", "0", "0"],
    ["1", "1", "1"],
    ["0", "0", "0"],
    ]);
});
});

describe("PieceSquare", () => {
it("tiene la forma correcta al crearse", () => {
    const pieza = new PieceSquare();
    expect(pieza.getForma()).toEqual([
    ["0", "0", "0"],
    ["1", "1", "0"],
    ["1", "1", "0"],
    ]);
});

it("rota correctamente hacia la derecha", () => {
    const pieza = new PieceSquare();
    pieza.rotateRight();
    expect(pieza.getForma()).toEqual([
    ["1", "1", "0"],
    ["1", "1", "0"],
    ["0", "0", "0"],
    ]);
});

it("rota correctamente hacia la izquierda", () => {
    const pieza = new PieceSquare();
    pieza.rotateLeft();
    expect(pieza.getForma()).toEqual([
    ["0", "0", "0"],
    ["0", "1", "1"],
    ["0", "1", "1"],
    ]);
});
});

describe("PieceL", () => {
it("tiene la forma correcta al crearse", () => {
    const pieza = new PieceL();
    expect(pieza.getForma()).toEqual([
    ["1", "0", "0"],
    ["1", "0", "0"],
    ["1", "1", "0"],
    ]);
});

it("rota correctamente hacia la derecha", () => {
    const pieza = new PieceL();
    pieza.rotateRight();
    expect(pieza.getForma()).toEqual([
    ["1", "1", "1"],
    ["1", "0", "0"],
    ["0", "0", "0"],
    ]);
});

it("rota correctamente hacia la izquierda", () => {
    const pieza = new PieceL();
    pieza.rotateLeft();
    expect(pieza.getForma()).toEqual([
    ["0", "0", "0"],
    ["0", "0", "1"],
    ["1", "1", "1"],
    ]);
});
});

describe("PieceDog", () => {
it("tiene la forma correcta al crearse", () => {
    const pieza = new PieceDog();
    expect(pieza.getForma()).toEqual([
    ["1", "1", "0"],
    ["0", "1", "0"],
    ["0", "1", "1"],
    ]);
});

it("rota correctamente hacia la derecha", () => {
    const pieza = new PieceDog();
    pieza.rotateRight();
    expect(pieza.getForma()).toEqual([
    ["0", "0", "1"],
    ["1", "1", "1"],
    ["1", "0", "0"],
    ]);
});

it("rota correctamente hacia la izquierda", () => {
    const pieza = new PieceDog();
    pieza.rotateLeft();
    expect(pieza.getForma()).toEqual([
    ["0", "0", "1"],
    ["1", "1", "1"],
    ["1", "0", "0"],
    ]);
});
});