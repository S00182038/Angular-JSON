import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarApiService {
  private _siteURL = 'http://localhost:300/car_data';
  constructor(private _http: HttpClient) { }

  getCarData(): Observable <ICar[]> {
  return this._http.get<ICar[]>(this._siteURL).pipe(
  tap(data => console.log ('All: ' + JSON.stringify(data))),
  catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.log('CarApiService: ' + err.message);
    return Observable.throw(err.message);
  }
}