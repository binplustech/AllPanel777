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
    Logo
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CarouselModule,
        SlickCarouselModule,
    ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
