import { PieceBase } from "./Piecebase.js";

export class pieceStick extends PieceBase {
    constructor(){
        super("Stick",[
            ["0","1","0"],
            ["0","1","0"],
            ["0","1","0"]   
        ]);
    }
}