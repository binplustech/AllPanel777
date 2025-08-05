import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sport } from './sport/sport';
import {Dashboard} from './dashboard/dashboard';
import { Casino } from './casino/casino';
import { Owncasino } from './pages/owncasino/owncasino';
import { Foot } from './core/layout/foot/foot';

const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'sport', component: Sport },
  { path: 'owncasino', component: Owncasino },
  { path: 'casino', component: Casino },
  { path: 'casino/:gameName', component: Casino },
  { path: 'mediaplayer/:gameName/:id', component: Foot}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
