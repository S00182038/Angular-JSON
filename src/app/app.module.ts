import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarComponent } from './car/car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import {  AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarComponent,
    AddCarComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
  AngularFirestoreModule,
  // RouterModule.forRoot( routes )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
