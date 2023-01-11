import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassengersModule } from './passengers/passengers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PassengersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
