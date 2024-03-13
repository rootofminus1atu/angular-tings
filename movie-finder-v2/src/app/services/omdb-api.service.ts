import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { OMDBResponse } from '../omdbresponse';
import environment from '../env';
import { IMDBResponseManyMovies } from '../omdbresponse-many-movies';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {
  private _urlBase = "https://www.omdbapi.com/"
  private _apiKey = environment.apiKey;
  private _url = `${this._urlBase}?apikey=${this._apiKey}`
  private fetchByTitle = (title: string) => `${this._url}&t=${title}`
  private searchByTitleManyMovies = (title: string, page: number) => `${this._url}&s=${title}&page=${page}`


  constructor(private _http: HttpClient) { }

  getMovieData(title: string): Observable<OMDBResponse> {
    return this._http.get<OMDBResponse>(this.fetchByTitle(title))
      .pipe(
        tap(data => console.log('Moviedata/error' + JSON.stringify(data))),
        catchError(this.handleError)
      )
  }

  getManyMoviesData(title: string, page: number): Observable<IMDBResponseManyMovies> {
    return this._http.get<IMDBResponseManyMovies>(this.searchByTitleManyMovies(title, page))
      .pipe(
        tap(data => console.log('Moviedata/error' + JSON.stringify(data))),
        catchError(this.handleError)
      )
  }

  private handleError(err: HttpErrorResponse) {
    console.log(`OMDBApiService: ${err.message}`)
    return throwError(() => new Error(`OMDBApiService: ${err.message}`))
  }
}
