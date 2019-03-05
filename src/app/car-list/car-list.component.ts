import { Component, OnInit } from '@angular/core';
import { CarApiService } from '../services/car-api.service';
// import { Car } from '../car'

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
