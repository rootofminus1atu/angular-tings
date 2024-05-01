import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasBoxComponent } from './components/canvas-box/canvas-box.component';
import { CubeV2Component } from './components/cube-v2/cube-v2.component';
import { CubeV3Component } from './components/cube-v3/cube-v3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CanvasBoxComponent, CubeV2Component, CubeV3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-three';
}
