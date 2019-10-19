import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CropsComponent } from './crops/crops.component'
import { StagesComponent } from './stages/stages.component'


const routes: Routes = [
    { path: '', redirectTo: '/crops', pathMatch: 'full' },
    { path: 'crops', component: CropsComponent },
    { path: 'stages', component: StagesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
