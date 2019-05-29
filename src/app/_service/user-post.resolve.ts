import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { PostService } from "./post.service";
import { IPost } from "./post.interface";

@Injectable()
export class UserPostsResolve implements Resolve<IPost[]> {
  constructor(private postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<IPost[]> {
    return this.postService.getPosts();
  }
}
