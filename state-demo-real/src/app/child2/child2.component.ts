import { Component, inject } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  countService = inject(CountService)
}
