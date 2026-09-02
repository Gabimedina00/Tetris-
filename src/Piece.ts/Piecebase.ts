export abstract class PieceBase {
protected forma: string[][];
public readonly name: string;

constructor(name: string, forma: string[][]) {
    this.name = name;
    this.forma = forma;
}

public getForma(): string[][] {
    return this.forma;
}
}

