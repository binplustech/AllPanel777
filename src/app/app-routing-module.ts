import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sport } from './sport/sport';
import {Dashboard} from './dashboard/dashboard';

const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'sport', component: Sport }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
