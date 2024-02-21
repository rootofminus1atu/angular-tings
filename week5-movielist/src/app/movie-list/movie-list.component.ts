import { Component, EventEmitter, Output } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies: Movie[] = []
  private currentMovie!: Movie

  @Output() onSelectedMovie: EventEmitter<Movie>

  constructor(private movieService: MovieService) {
    this.onSelectedMovie = new EventEmitter()
  }

  ngOnInit() {
    this.movies = this.movieService.getMovies()
    console.log(this.movies)
  }

  selectMovie(selectedMovie: Movie): void {
    console.log(selectedMovie)
    this.currentMovie = selectedMovie 
    this.onSelectedMovie.emit(selectedMovie)
  }

  isSelected(movie: Movie): boolean {
    if (!movie || !this.currentMovie) {
      return false
    }

    return movie.id === this.currentMovie.id
  }
}
