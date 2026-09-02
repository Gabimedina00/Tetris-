export class Tetris {
private started: boolean = false;

start(): void {
    this.started = true;    
}
state(): boolean {
    return this.started;
} 

}

