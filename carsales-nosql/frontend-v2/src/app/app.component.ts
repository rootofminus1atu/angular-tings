import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarlistComponent } from './components/carlist/carlist.component';
import { DummyComponent } from './components/dummy/dummy.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarlistComponent, DummyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-v2';
}
