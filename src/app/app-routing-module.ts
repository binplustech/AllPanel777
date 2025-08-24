import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sport } from './sport/sport';
import { Dashboard } from './dashboard/dashboard';
import { Casino } from './casino/casino';
import { Owncasino } from './pages/owncasino/owncasino';
import {MainWrapper} from './main-wrapper/main-wrapper';
import {NotFoundPage} from './pages/not-found-page/not-found-page';

const routes: Routes = [
  { path: '', component: Dashboard },
  {
    path: '',
    component: MainWrapper,
    children: [
      { path: 'sport', component: Sport },
      { path: 'casino', component: Casino },
      { path: 'casino/:gameName', component: Casino },
      // { path: 'mediaplayer/:gameName/:id', component: Foot }
    ],
  },
  { path: 'owncasino', component: Owncasino },
  { path: 'aviator', component: NotFoundPage },
  { path: 'othergames/:id', component: NotFoundPage },
  { path: 'fantasy', component: NotFoundPage },
  { path: 'slot', component: NotFoundPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
