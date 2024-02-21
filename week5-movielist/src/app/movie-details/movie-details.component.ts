import { Component, Input } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  @Input() movie!: Movie
}
