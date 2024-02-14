import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {

  constructor(private movieService: MovieService) {}

  addNewMovie(movieTitle: HTMLInputElement, directorName: HTMLInputElement, year: HTMLInputElement): boolean {
    this.movieService.addMovie(movieTitle.value, directorName.value, year.value)

    return false
  }
}
