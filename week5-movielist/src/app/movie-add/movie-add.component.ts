import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-add',
  standalone: true,
  imports: [],
  templateUrl: './movie-add.component.html',
  styleUrl: './movie-add.component.css'
})
export class MovieAddComponent {

  constructor(private movieService: MovieService) {}

  addNewMovie(movieTitle: HTMLInputElement, directorName: HTMLInputElement, year: HTMLInputElement): boolean {
    this.movieService.addMovie(movieTitle.value, directorName.value, year.value)

    return false
  }
}
