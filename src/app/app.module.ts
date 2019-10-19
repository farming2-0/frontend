import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CropsComponent } from './crops/crops.component';
import { StagesComponent } from './stages/stages.component';

@NgModule({
  declarations: [
    AppComponent,
    CropsComponent,
    StagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
