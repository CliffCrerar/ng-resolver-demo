import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppComponent } from 'app/app.component';
// import { AppLandComponent } from 'app/land.component';
import { AppRoutingModule } from 'app/app-routing.module';

import { UsrProfileComponent } from 'app/usr-profile/usr-profile.component';
import { ContactFormComponent } from 'app/contact-form/contact-form.component';
import { NotFoundComponent } from 'app/not-found/not-found.component';
import { BloggerComponent } from 'app/blogger/blogger.component';
import { UserPostsResolve } from 'app/_service/user-post.resolve';
import { PostService } from 'app/_service/post.service';
import { UserPostsComponent } from 'app/user-posts/user-posts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

@NgModule({
  declarations: [
    AppComponent,
    // AppLandComponent,
    UsrProfileComponent,
    ContactFormComponent,
    NotFoundComponent,
    BloggerComponent,
    UserPostsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SlimLoadingBarModule.forRoot(),
    BrowserAnimationsModule,
    // MaterialModule,
  ],
  providers: [
    PostService,
    [{ provide: 'BASE_URL', useFactory: getBaseUrl() }],
    // ScrollDatService,
    UserPostsResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
