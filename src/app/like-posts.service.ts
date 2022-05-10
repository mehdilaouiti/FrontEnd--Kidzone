import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LikePosts } from './like-posts';
@Injectable({
  providedIn: 'root'
})
export class LikePostsService {

 
  private baseURL = "http://localhost:8081/SpringMVC/pi/Addlike";
  private baseURL2 ="http://localhost:8081/SpringMVC/pi/DelLike/3"
  constructor(private httpClient: HttpClient) { }
  

  Like(LikePosts: LikePosts,id:number,id2:number): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/${id2}/${id}`, LikePosts);
  }
  deletelike(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL2}/${id}`);
  }
}
