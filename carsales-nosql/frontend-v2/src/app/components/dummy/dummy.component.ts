import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Component({
  selector: 'app-dummy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.css'
})
export class DummyComponent {
  people$: Observable<string[]> = this.getPeople();

  getPeople(): Observable<string[]> {
    return throwError(() => new Error("lol"))
    return of([
      "p1",
      "p2",
      "p3"
    ])
  }
}
