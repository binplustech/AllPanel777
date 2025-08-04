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

@NgModule({
  declarations: [
    App,
    Sport,
    Dashboard,
    VideoComponent
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
