import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { forum } from './forum';
import { environment } from 'src/environments/environment';
const endpoint = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private baseURL = "http://localhost:8081/SpringMVC/forum";
  constructor(private httpClient: HttpClient) { }
  
  getForumList(): Observable<forum[]>{
    return this.httpClient.get<forum[]>("http://localhost:8081/SpringMVC/forums");
  }
  createforum(forum: forum): Observable<Object>{
    return this.httpClient.post('http://localhost:8081/SpringMVC/addForum', forum);
  }
  getForumById(id: number): Observable<forum>{
    return this.httpClient.get<forum>(`${this.baseURL}/${id}`);
  }

  updateForum(id: number, forum: forum): Observable<Object>{
    return this.httpClient.put('http://localhost:8081/SpringMVC/updateforum', forum);
  }
  
  deleteforum(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  getAllPosts(): Observable<any> {
    return this.httpClient.get(endpoint);
  }
}
