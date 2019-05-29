import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { PostService } from "app/_service/post.service";
import { IPost } from "app/_service/post.interface";

@Component({
  selector: 'app-user-posts',
  template: `
<ul class="list-group">
  <li *ngFor="let post of userPosts" class="list-group-item">
    <button (click)="updatePost(post)" class="btn btn-default btn-sm">Update</button>
    <button (click)="deletePost(post)" class="btn btn-default btn-sm">Delete</button>
    <a [routerLink]="['/userposts',post.id]">{{post.id}}</a> - {{post.title}}
  </li>
</ul>
  `,
  styles: []
})
export class UserPostsComponent implements OnInit {

  userPosts: IPost[] = [];

  postObject$;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userPosts = this.route.snapshot.data.userposts;
  }

}
