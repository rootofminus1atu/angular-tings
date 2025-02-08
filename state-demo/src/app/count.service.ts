import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  count = signal<number>(0)
  doubleCount = computed(() => 2 * this.count())

  constructor() { }

  increment() {
    this.count.update((val) => val + 1)
  }

  decrement() {
    this.count.update((val) => val <= 0 ? 0 : val - 1)
  }

  getCount() {
    return this.count()
  }
}
