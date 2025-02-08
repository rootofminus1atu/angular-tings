import { Component, inject } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  countService = inject(CountService)
}
