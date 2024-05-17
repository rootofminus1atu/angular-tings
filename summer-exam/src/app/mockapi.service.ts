import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StaffMember } from './interfaceStaff';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {
  private _siteUrl: string = "https://664734cd51e227f23ab181a9.mockapi.io/staffDetails"

  constructor(private _http: HttpClient) {}

  getStaffDetails(): Observable<StaffMember[]> {
    console.log('called')
    return this._http.get<StaffMember[]>(this._siteUrl).pipe(
      tap(data => console.log('data', data))
    )
  }

  handleError() {

  }
}
