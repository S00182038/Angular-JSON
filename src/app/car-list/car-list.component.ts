import { Component, OnInit } from '@angular/core';
import { CarApiService } from '../services/car-api.service';
import { Car } from '../car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  providers: [CarApiService]
})
export class CarListComponent implements OnInit {
  carsData: ICar[];
  constructor(private _carAPIService: CarApiService) { }

  ngOnInit() {
    this._carAPIService.getCarData().subscribe(carsData => { this.carsData = carsData });
  }
  addCar(evt) {
    this.carsData.push(evt);
  }
  addTheCar(make: string, model: string,year: string, imageUrl: string ): boolean {
    let tempCar = new Car(make, model, year, imageUrl);
    this._carAPIService.addCarData(tempCar);
    return false;
  }
}
