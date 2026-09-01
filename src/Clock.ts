export class Clock {
    private ticks: number=0;

    getTicks(): number {
        return this.ticks;
    }   

    tick(): void {
        this.ticks++;
    }   
}