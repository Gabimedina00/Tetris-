import {it, expect} from "vitest";
import { Board } from "../src/Board.js";

it("Un tablero nuevo tiene 20 filas y 10 columnas vacias", () => {
    const board = new Board();
    expect(board.grid.length).toBe(20);
    expect(board.grid[0]?.length).toBe(10);
    expect(board.grid[0]?.[0]).toBeNull();
    })