import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { IMDBAPIService } from "./services/imdbapi.service"

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [IMDBAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
