import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from './comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private baseURL = "http://localhost:8081/SpringMVC/pi/AddComments";
  private baseURL2 = "http://localhost:8081/SpringMVC/pi/RetrieveComments";
  constructor(private httpClient: HttpClient) { }
  
  
  Addcomment(Comments: Comments,id:number,): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/${id}`, Comments);
  }
  getCombyId(id: number){
    return this.httpClient.get<any>(`${this.baseURL2}/${id}`);
  
  }
}


