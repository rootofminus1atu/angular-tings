import { Component } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { Movie } from './movie.model';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieListComponent, MovieAddComponent, MovieDetailsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANOTHER-movie-list';

  public mySelectedMovie!: Movie

  setSelectedMovie(movie: Movie) {
    this.mySelectedMovie = movie
  }
}
