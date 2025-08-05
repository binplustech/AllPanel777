import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  showLayout = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const currentRoute = event.urlAfterRedirects;
      // this.showLayout = !['/', 'mediaplayer/*/*'].includes(currentRoute);
      const hideOnRoutes = [
        /^\/$/,                                 // Home
        /^\/mediaplayer\/[^/]+\/[^/]+$/         // mediaplayer/:gameName/:id
      ];

      this.showLayout = !hideOnRoutes.some(regex => regex.test(currentRoute));
    });
  }
}
