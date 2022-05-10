import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reponse } from './reponse';

@Injectable({
  providedIn: 'root'
})
export class ReponseService {


  private baseURL = "http://localhost:8081/SpringMVC/forum";
  private base2URL = "http://localhost:8081/SpringMVC/sujet";
  private base3URL = "http://localhost:8081/SpringMVC/sujets";
  private base4URL = "http://localhost:8081/SpringMVC/reponses"
  constructor(private httpClient: HttpClient) { }
  
  getReponseList(): Observable<Reponse[]>{
    return this.httpClient.get<Reponse[]>("http://localhost:8081/SpringMVC/reponses");
  }
  getReponseyId(id: number){
    return this.httpClient.get<any>(`${this.base3URL}/${id}/reponses`);
  
  }
  deleteReponse(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.base4URL}/${id}`);
  }
  updateReponse(id: number, Reponse: Reponse): Observable<Object>{
    return this.httpClient.put(`${this.base3URL}/${id}/reponses/add-reponse`, Reponse);
  }
  createReponse(id:number, Reponse: Reponse): Observable<Object>{
    return this.httpClient.post(`${this.base3URL}/${id}/reponses/add-reponse`, Reponse);
  }
}
