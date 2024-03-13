import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OmdbApiService } from '../../services/omdb-api.service';
import { IMDBResponseManyMovies } from '../../omdbresponse-many-movies';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  movieData: IMDBResponseManyMovies | undefined
  currentPage = 1
  maxPages = 0
  errorMessage: any

  constructor(private _omdbService: OmdbApiService) {}

  getMovieDetails(movieName: string): boolean {
    this._omdbService.getManyMoviesData(movieName, this.currentPage).subscribe(
      movieData => {
        this.movieData = movieData;
        //console.log("Director name : " + this.movieData.Director);
      }
    )

    return false
  }

  getPreviousPage(movieName: string): boolean {
    this.currentPage--

    if (this.currentPage < 1)
      this.currentPage = 1

    this._omdbService.getManyMoviesData(movieName, this.currentPage).subscribe(
      movieData => {
        this.movieData = movieData;
      }
    )

    return false
  }

  getNextPage(movieName: string): boolean {
    this.currentPage++

    this._omdbService.getManyMoviesData(movieName, this.currentPage).subscribe(
      movieData => {
        this.movieData = movieData
      }
    )

    return false
  }
}
