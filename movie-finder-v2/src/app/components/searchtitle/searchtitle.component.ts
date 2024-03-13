import { Component } from '@angular/core';
import { OMDBResponse } from '../../omdbresponse';
import { OmdbApiService } from '../../services/omdb-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-searchtitle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './searchtitle.component.html',
  styleUrl: './searchtitle.component.css'
})
export class SearchtitleComponent {
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
