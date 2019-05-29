import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-head',
  template: `
  <div style="min-height: 500px;height: auto">

    <span class="input-group-btn d-flex mt-4 align-items-center flex-row">
      <button type="button" class="btn btn-primary"
      (click)="onHttpClick($event)">Go!</button>
      <h4 class="ml-3">Http Call Test</h4>
    </span>

    <div *ngFor="let d of data" >
      <a href="#" target="_blank" [innerText]="d.title"></a>
    </div>

  <div>
`,
  styles: []
})
export class AppLandComponent implements OnInit {
  title = 'Resolver Demo Sandbox';
  endpoint = 'https://api.hnpwa.com/v0/news/1.json';
  data;
  tempFn;
  constructor(private http: HttpClient) {
    this.tempFn = (d) => {
      console.log('d: ', d);
      this.data = d;
    }
  }

  ngOnInit() {

  }

  onHttpClick(ev: Event) {
    setTimeout(() => {
      this.http.get(this.endpoint).subscribe(data => {
        console.log('data: ', data);
        this.data = data;
        this.tempFn(data);
      })
    }, 2000);
  }
}
