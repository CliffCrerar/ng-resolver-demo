import { Component, Input, ElementRef } from '@angular/core';
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import {
  NavigationStart,
  NavigationEnd,
  Event,
  Router
} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `


        <ng2-slim-loading-bar></ng2-slim-loading-bar>

        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="collapse navbar-collapse">
              <ul class="nav navbar-nav">
                <li routerLinkActive="active current"><a routerLink="/">Home</a></li>
                <li routerLinkActive="active current"><a routerLink="/userposts">User Posts</a></li>
                <li routerLinkActive="active current"><a routerLink="/bloggers">Bloggers</a></li>
                <li routerLinkActive="active current"><a routerLink="/contact-us">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </nav>

			<router-outlet></router-outlet>

  `,
  styles: [``]
})
export class AppComponent {
  title = 'Resolver Demo Sandbox';
  constructor(
    private lBar: SlimLoadingBarService,
    private _router: Router
  ) {
    this._router.events.subscribe((event: Event) => {
      console.log(event);
      this.loadingBarInterceptor(event);
    });
  }

  private loadingBarInterceptor(event: Event) {
    if (event instanceof NavigationStart) {
      this.lBar.start();
    }
    if (event instanceof NavigationEnd) {
      this.lBar.complete();
    }
  }
}
