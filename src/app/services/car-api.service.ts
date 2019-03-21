import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class CarApiService {
  private _siteURL = 'http://localhost:3000/car_data';
  carsDataCollection: AngularFirestoreCollection<ICar>;
  carsData: Observable<ICar[]>;
  allCarsData: ICar[];
  errorMessage: string;
  constructor(private _http: HttpClient, private _afs: AngularFirestore) {
    this.carsDataCollection = _afs.collection<ICar>('cars_data');
  }

  getCarData(): Observable <ICar[]> {
    this.carsData = this.carsDataCollection.valueChanges();
    this.carsData.subscribe(data => console.log('getCarsData: ' + JSON.stringify(data)))
    return this.carsData;
  // return this._http.get<ICar[]>(this._siteURL).pipe(
  // tap(data => console.log ('All: ' + JSON.stringify(data))),
  // catchError(this.handleError));
  }
addCarData(car: ICar): void {
  this.carsDataCollection.add(JSON.parse(JSON.stringify(car)));
}
  // private handleError(err: HttpErrorResponse) {
  //   console.log('CarApiService: ' + err.message);
  //   return Observable.throw(err.message);
  // }
}
addAllProducts(){
  this._http.get<ICar[]>(this._siteURL).subscribe(
    carsData => {
      this.allCarsData = carsData;
      for (const car of this.allCarsData) {
        console.log('Adding : Make ' + car.make + '- Model' + car.model);
        this.carsDataCollection.add(car);
      }
      },
      error => (this.errorMessage = <any> error )
        );
  }
}
