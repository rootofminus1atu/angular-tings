import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab-2'

  thingsToDo = [
    "do this",
    "do that",
    "do everything"
  ]

  thingsCompleted = []

  summary(): string {
    return `${this.thingsToDo.length} to do / ${this.thingsCompleted.length} done`
  }
}
