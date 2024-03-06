import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { OMDBResponse } from '../omdbresponse';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {
  private _urlBase = "http://www.omdbapi.com/"
  private _apiKey = "no"
  private fetchByTitleLink = (title: string) => `${this._urlBase}?apikey=${this._apiKey}&t=${title}`


  constructor(private _http: HttpClient) { console.log(this._apiKey) }

  getMovieData(title: string): Observable<OMDBResponse> {
    return this._http.get<OMDBResponse>(this.fetchByTitleLink(title))
      .pipe(
        tap(data => console.log('Moviedata/error' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    console.log(`OMDBApiService: ${err.message}`)
    return throwError(() => new Error(`OMDBApiService: ${err.message}`))
  }
}
