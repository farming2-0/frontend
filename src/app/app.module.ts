import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CropsComponent } from './crops/crops.component';
import { StagesComponent } from './stages/stages.component';
import { MachinesComponent } from './machines/machines.component';

@NgModule({
  declarations: [
    AppComponent,
    CropsComponent,
    StagesComponent,
    MachinesComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
