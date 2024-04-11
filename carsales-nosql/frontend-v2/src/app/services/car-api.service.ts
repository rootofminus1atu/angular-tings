import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, tap, throwError } from 'rxjs';
import { ICar, ICarAddResponse, ICarDeleteResponse, ICarDeleteResponseChecked, toChecked } from '../interfaces/car';
import { err, ok, Result } from 'neverthrow';

@Injectable({
  providedIn: 'root'
})
export class CarApiService {
  private _urlBase = "http://localhost:5050"
  private url = (path: string) => `${this._urlBase}/cars${path}`

  constructor(private _http: HttpClient) { }

  /*
getNameFromService(): Observable<Result<string, string>> {
    // return "joe" but 1 second time wait
    return of(ok("joe")).pipe(delay(1000))
  }
  */

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

  private handleError (e: Error): Observable<Result<never, string>> {
    const newMsg = `CarApiService error: ${e.message}`
    console.error(newMsg)
    return of(err(newMsg))
  }
}



/*
@Injectable({
  providedIn: 'root'
})
export class CarApiService {
  private _urlBase = "http://localhost:5050"
  private url = (path: string) => `${this._urlBase}/cars${path}`

  constructor(private _http: HttpClient) { }

  getCarDetails(): Observable<ICar[]> {
    return this._http.get<ICar[]>(this.url("/"))
      .pipe(
        tap(data => console.log('get car message/error', JSON.stringify(data))),
        catchError(this.handleError)
      )
  }

  // does not return an array of cars, but instead something like:
  // {acknowledged: true, insertedId: '65fad24be55626ad7ccfc0b0'}
  addCarDetails(car: ICar): Observable<ICarAddResponse> {
    return this._http.post<ICarAddResponse>(this.url("/"), car)
      .pipe(
        tap(data => console.log('add car message/error', JSON.stringify(data))),
        catchError(this.handleError)
      )
  }

  // similarly here, we get a json with "acknowledged"
  delCarDetails(carId: string): Observable<ICarDeleteResponseChecked> {
    return this._http.delete<ICarDeleteResponse>(this.url(`/${carId}`))
      .pipe(
        tap(data => console.log('delete car message/error', JSON.stringify(data))),
        map(carRes => toChecked(carRes, carId)),
        catchError(this.handleError)
      )
  }

  private handleError (e: Error) {
    console.error('CarApiService error:', e.message);
    return throwError(() => new Error(`CarApiService error: ${e.message}`))
  }
}
*/


