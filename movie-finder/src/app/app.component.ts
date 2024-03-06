import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OmdbApiService } from './services/omdb-api.service';
import { OMDBResponse } from './omdbresponse'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-finder'
  movieData: OMDBResponse | undefined
  errorMessage: any

  constructor(private _omdbService: OmdbApiService) {}

  getMovieDetails(movieName: string): boolean {
    this._omdbService
      .getMovieData(movieName)
      .subscribe(movieData => {
        this.movieData = movieData
        console.log("we got", movieData)
      })
    
    return false
  }
}
