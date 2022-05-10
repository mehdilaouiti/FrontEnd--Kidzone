import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Publication } from './publication';

import { environment } from 'src/environments/environment';
const endpoint = 'https://jsonplaceholder.typicode.com/posts';
@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private baseURL = "http://localhost:8081/SpringMVC/pi/RetrievePublication";
  constructor(private httpClient: HttpClient) { }
  
  getpubList(): Observable<Publication[]>{
    return this.httpClient.get<Publication[]>("http://localhost:8081/SpringMVC/pi/RetrievePublication");
  }
  createforum(Publication: Publication): Observable<Object>{
    return this.httpClient.post('http://localhost:8081/SpringMVC/pi/AddPublication', Publication);
  }
  postFileRec(file: FormData):Observable<any> {
    const endpoint = 'http://localhost:8081/SpringMVC/pi/uploadImage';
    return this.httpClient.post(endpoint, file);
  }
  getPubbyId(id: number){
    return this.httpClient.get<any>(`${this.baseURL}/${id}`);
  
  }
  getuserList(id: number){
    const endpoint = 'http://localhost:8081/SpringMVC/pi/retrieve-all-reclamationsByUser';
    return this.httpClient.get<any>(`${endpoint}/${id}`);
  }
  deleteforum(id: number): Observable<Object>{
    const endpoint = 'http://localhost:8081/SpringMVC/pi/remove-publication';
    return this.httpClient.delete(`${endpoint}/${id}`);
  }
  updateForum(id: number, forum: Publication): Observable<Object>{
    const endpoint = 'http://localhost:8081/SpringMVC/pi/UpdatePublication';
    return this.httpClient.put(`${endpoint}/${id}`,forum);
  }
}
