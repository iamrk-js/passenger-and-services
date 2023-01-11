import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassService } from '../services/pass.service';
import { PassengerdashboardComponent } from './passengerdashboard/passengerdashboard.component';
import { PassCountComponent } from './passengerdashboard/pass-count/pass-count.component';
import { PassDetailsComponent } from './passengerdashboard/pass-details/pass-details.component';



@NgModule({
  declarations: [
    PassengerdashboardComponent,
    PassCountComponent,
    PassDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PassengerdashboardComponent],
  providers : [PassService]
})
export class PassengersModule { }
