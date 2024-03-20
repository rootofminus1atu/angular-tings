import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { ICar } from '../interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class CarApiService {
  private _urlBase = "http://localhost:5050"
  private _url = (path: string) => `${this._urlBase}/cars${path}`

  constructor(private _http: HttpClient) { }

  getCarDetails(): Observable<ICar | string> {
    return this._http.get<ICar>(this._url("/"))
      .pipe(
        tap(data => console.log('car data/error' + JSON.stringify(data))),
        catchError(this.handleError)
      )
  }

  addCarDetails(car: ICar): Observable<ICar| string> {
    return this._http.post<ICar>(this._url("/"), car)
      .pipe(
        tap(data => console.log('add car message/error' + JSON.stringify(data))),
        catchError(this.handleError)
      )
  }

  delCarDetails(carId: string): Observable<ICar | string> {
    return this._http.delete<ICar>(this._url(`/${carId}`))
      .pipe(
        tap(data => console.log('add car message/error' + JSON.stringify(data))),
        catchError(this.handleError)
      )
  }

  private handleError (err: HttpErrorResponse) {
    console.log('CarApiService: ' + err.message);
    return err.message;
  }
}
