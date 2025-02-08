import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountService } from './count.service';
import { Child1Component } from "./child1/child1.component";
import { Child2Component } from "./child2/child2.component";

@Component({
  selector: 'app-root',
  imports: [Child1Component, Child2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'state-demo';

  countService = inject(CountService)
}
