import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { delay } from "rxjs/operators";
import { IPost } from "./post.interface";


@Injectable({
  providedIn: "root"
})
export class PostService {
  private url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url).pipe(delay(1000));
  }
}
