import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  public count$ = signal(0);

  increment() {
    this.count$.update((update) => update + 1);
  }

  decrement() {
    this.count$.update((update) => (update > 0 ? update - 1 : 0));
  }

  reset() {
    this.count$.set(0);
  }
}
