import { Component } from '@angular/core';
@Component({
    selector: 'app-counter',
    template: ` <h3>
      Contador: <span class="counter">{{ counter }}</span>
    </h3>
    <div class="buttons">
      <button class="btn increment" (click)="increment(1)">+1</button>
      <button class="btn reset" (click)="resetCounter()">Reiniciar</button>
      <button class="btn decrement" (click)="increment(-1)">-1</button>
    </div>`,
})
export class CounterComponent {
    public counter: number = 10;
    private defaultCounter: number = 10;
    increment(value: number): void {
        if (this.counter + value >= 0) {
            this.counter += value;
        }
    }
    resetCounter(): void {
        this.counter = this.defaultCounter;
    }
}
