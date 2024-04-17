import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { ICar, ICarAddResponse, ICarDeleteResponse, ICarDeleteResponseChecked, toChecked } from '../interfaces/car';
import { err, ok, Result } from 'neverthrow';

@Injectable({
  providedIn: 'root'
})
export class CarApiService {
  private _urlBase = "http://3.249.102.226:5050"
  private url = (path: string) => `${this._urlBase}/cars${path}`

  constructor(private _http: HttpClient) { }

  getCarDetails(): Observable<Result<ICar[], string>> {
    return this._http.get<ICar[]>(this.url("/"))
      .pipe(
        tap(data => console.log('get car message/error', JSON.stringify(data))),
        map(car => ok(car)),
        catchError(this.handleError)
      )
  }

  // does not return an array of cars, but instead something like:
  // {acknowledged: true, insertedId: '65fad24be55626ad7ccfc0b0'}
  addCarDetails(car: ICar): Observable<Result<ICarAddResponse, string>> {
    return this._http.post<ICarAddResponse>(this.url("/"), car)
      .pipe(
        tap(data => console.log('add car message/error', JSON.stringify(data))),
        map(carRes => ok(carRes)),
        catchError(this.handleError)
      )
  }

  // similarly here, we get a json with "acknowledged"
  delCarDetails(carId: string): Observable<Result<ICarDeleteResponseChecked, string>> {
    return this._http.delete<ICarDeleteResponse>(this.url(`/${carId}`))
      .pipe(
        tap(data => console.log('delete car message/error', JSON.stringify(data))),
        map(carRes => toChecked(carRes, carId)),
        catchError(this.handleError)
      )
  }

  private handleError (e: HttpErrorResponse): Observable<Result<never, string>> {
    console.error('CarApiService error:', e.message);
    return of(err(e.message))
  }
}


