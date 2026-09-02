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

//filas: cuantos array hay dentro de this.forma(alto de la matriz) y columna: cuantos 
//elementos tiene el primer array
public rotateRight(): void {
    const filas = this.forma.length;
    const columnas = this.forma[0]!.length;
//prepara la nueva matriz 
    const nuevaForma: string[][] = [];

    for (let i = 0; i < columnas; i++) {
        nuevaForma[i] = [];
        for (let j = filas - 1; j >= 0; j--) {
            nuevaForma[i]!.push(this.forma[j]![i]!);
    }
    }
    this.forma = nuevaForma;
}
}

