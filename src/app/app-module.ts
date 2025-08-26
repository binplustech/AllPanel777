import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Sport } from './sport/sport';
import {SlickCarouselModule} from "ngx-slick-carousel";
import { Dashboard } from './dashboard/dashboard';
import { VideoComponent } from './video-component/video-component';
import { Casino } from './casino/casino';
import { Header } from './core/layout/header/header';
import { Footer } from './core/layout/footer/footer';
import { Sidebar } from './core/layout/sidebar/sidebar';
import { Head } from './core/layout/head/head';
import { Foot } from './core/layout/foot/foot';
import { NewsBox } from './core/layout/news-box/news-box';
import { UpcomingFixture } from './core/layout/upcoming-fixture/upcoming-fixture';
import { Owncasino } from './pages/owncasino/owncasino';
import { MainWrapper } from './main-wrapper/main-wrapper';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { SportRightSidebar } from './sport/sport-right-sidebar/sport-right-sidebar';
import { CasinoList } from './pages/owncasino/casino-list/casino-list';
import { Logo } from './core/logo/logo';
import { Lucky7 } from './casino/casino-tables/lucky7/lucky7';
import { Lucky7eu } from './casino/casino-tables/lucky7eu/lucky7eu';
import { Lucky5 } from './casino/casino-tables/lucky5/lucky5';
import { Lucky7eu2 } from './casino/casino-tables/lucky7eu2/lucky7eu2';
import { Lucky15 } from './casino/casino-tables/lucky15/lucky15';
import { Andarbahar } from './casino/casino-tables/andarbahar/andarbahar';
import { Andarbahar2 } from './casino/casino-tables/andarbahar2/andarbahar2';
import { Ab3 } from './casino/casino-tables/ab3/ab3';
import { Ab4 } from './casino/casino-tables/ab4/ab4';
import { Card32A } from './casino/casino-tables/card32-a/card32-a';
import { Card32B } from './casino/casino-tables/card32-b/card32-b';
import { Dragontigert20 } from './casino/casino-tables/dragontigert20/dragontigert20';
import { Dragontigeroneday } from './casino/casino-tables/dragontigeroneday/dragontigeroneday';
import { Dragontigerliont20 } from './casino/casino-tables/dragontigerliont20/dragontigerliont20';
import { Dragontigert202 } from './casino/casino-tables/dragontigert202/dragontigert202';
import { Pokeroneday } from './casino/casino-tables/pokeroneday/pokeroneday';
import { Pokert20 } from './casino/casino-tables/pokert20/pokert20';
import { Poker6player } from './casino/casino-tables/poker6player/poker6player';
import { HttpClientModule } from "@angular/common/http";
import { CardImageUrl } from "./pipes/imageUrl.pipe";

@NgModule({
  declarations: [
    App,
    Sport,
    Dashboard,
    VideoComponent,
    Casino,
    Header,
    Footer,
    Sidebar,
    Head,
    Foot,
    NewsBox,
    UpcomingFixture,
    Owncasino,
    MainWrapper,
    NotFoundPage,
    SportRightSidebar,
    CasinoList,
    Logo,
    Lucky7,
    Lucky7eu,
    Lucky5,
    Lucky7eu2,
    Lucky15,
    Andarbahar,
    Andarbahar2,
    Ab3,
    Ab4,
    Card32A,
    Card32B,
    Dragontigert20,
    Dragontigeroneday,
    Dragontigerliont20,
    Dragontigert202,
    Pokeroneday,
    Pokert20,
    Poker6player
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		CarouselModule,
		CardImageUrl,
		SlickCarouselModule,
		HttpClientModule
	],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
