import { describe, expect, it } from "vitest";
import { PieceT } from "../src/Piece.ts/PieceT.js";

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