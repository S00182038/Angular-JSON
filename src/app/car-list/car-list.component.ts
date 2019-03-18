import { Component, OnInit } from '@angular/core';
import { CarApiService } from '../services/car-api.service';

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
}
