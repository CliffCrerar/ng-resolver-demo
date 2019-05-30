import { Component, Input, ElementRef } from '@angular/core';
import { SlimLoadingBarService } from "ng2-slim-loading-bar-observables";
import { NavigationStart, NavigationEnd, Event, Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.template.html',
  styleUrls: []
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
    })
  };

  private loadingBarInterceptor(event: Event) {
    if (event instanceof NavigationStart) {
      this.lBar.start();
    }
    if (event instanceof NavigationEnd) {
      this.lBar.complete();
    }
  }
}
