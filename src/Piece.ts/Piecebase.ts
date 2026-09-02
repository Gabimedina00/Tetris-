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
public rotateRight(): void {
    const filas = this.forma.length;
    const columnas = this.forma[0]!.length;
    const nuevaForma: string[][] = [];

    for (let i = 0; i < columnas; i++) {
    nuevaForma[i] = [];
    for (let j = filas - 1; j >= 0; j--) {
        nuevaForma[i]!.push(this.forma[j]![i]!);
    }
    }

    this.forma = nuevaForma;
}

public rotateLeft(): void {
    const filas = this.forma.length;
    const columnas = this.forma[0]!.length;
    const nuevaForma: string[][] = [];

    for (let i = columnas - 1; i >= 0; i--) {
    const nuevaFila: string[] = [];
    for (let j = 0; j < filas; j++) {
        nuevaFila.push(this.forma[j]![i]!);
    }
    nuevaForma.push(nuevaFila);
    }

    this.forma = nuevaForma;
}
}