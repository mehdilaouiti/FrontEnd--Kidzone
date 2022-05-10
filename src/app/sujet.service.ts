import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { forum } from './forum';
import { environment } from 'src/environments/environment';
import { sujet } from './sujet';

@Injectable({
  providedIn: 'root'
})
export class SujetService {

  private baseURL = "http://localhost:8081/SpringMVC/forum";
  private base2URL = "http://localhost:8081/SpringMVC/sujet";
  
  constructor(private httpClient: HttpClient) { }
  
  getSujetList(): Observable<sujet[]>{
    return this.httpClient.get<sujet[]>("http://localhost:8081/SpringMVC/sujets");
  }
  getSujetyId(id: number){
    return this.httpClient.get<any>(`${this.baseURL}/${id}/sujets`);
  
  }
  deleteSujet(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.base2URL}/${id}`);
  }
  updateSujet(id: number, sujet: sujet): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}/sujets/updatesujet`, sujet);
  }
  createsujet(id:number, sujet: sujet): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/${id}/sujets/addsujet`, sujet);
  }
}