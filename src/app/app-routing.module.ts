import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppLandComponent } from './land.component';

import { UsrProfileComponent } from './usr-profile/usr-profile.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { UserPostsResolve } from './_service/user-post.resolve';
import { BloggerComponent } from './blogger/blogger.component';
import { AppComponent } from 'app/app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },

  {
    path: '',
    component: HomeComponent,
    data: { title: 'Resolver Demo' }
  },
  {
    path: 'userposts',
    component: UserPostsComponent,
    resolve: {
      userposts: UserPostsResolve
    }
  },
  { path: 'userposts/:id', component: UsrProfileComponent },
  { path: 'bloggers', component: BloggerComponent },
  { path: 'contact-us', component: ContactFormComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
