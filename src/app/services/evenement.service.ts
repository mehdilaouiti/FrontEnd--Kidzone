import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evenement } from '../evenement/Evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  private baseURL="http://localhost:8088/Evenement";
  constructor( private httpClient : HttpClient) { }

  getevenementList(): Observable<Evenement[]>{
    return this.httpClient.get<Evenement[]>(`${this.baseURL}/retrieve-all-evenement`);

  }

  createEvenement(evenement: Evenement): Observable<object>{
    console.log("evenement: ");
    console.log(evenement);
    return this.httpClient.post(`${this.baseURL}/ajouterEvenement`,evenement);
  }

  updateEvenement(evenement: Evenement): Observable<object>{
    console.log("evenement: ");
    console.log(evenement);
    return this.httpClient.put(`${this.baseURL}/updateEvenement`,evenement);
  }

  getEvenementById(id: number): Observable<Evenement>{
  return this.httpClient.get<Evenement>((`${this.baseURL}/retrieve-EventById?idEvent=${id}`));
}

deleteEvenement(id: number): Observable<Evenement>{
  return this.httpClient.delete<Evenement>((`${this.baseURL}/remove-evenement/${id}`));
}


}
