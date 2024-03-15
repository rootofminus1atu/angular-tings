import { Component } from '@angular/core';
import environment from '../../env';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  studentId = environment.studentId
  studentName = environment.studentName
}
