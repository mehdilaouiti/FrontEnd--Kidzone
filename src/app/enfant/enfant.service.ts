import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enfant } from './enfant';

@Injectable({
  providedIn: 'root'
})
export class EnfantService {

  private baseURLGet ="http://localhost:8070/enfant/retrieveAllEnfant";
  private baseURLPost ="http://localhost:8070/enfant/add-enfant";
  private baseURLGetN ="http://localhost:8070/enfant/NbreEnfant";
  private baseURLGetNG ="http://localhost:8070/enfant/NbreGarçons";
  private baseURLGetNF ="http://localhost:8070/enfant/NbreFilles";
  private baseURLGetEById = "http://localhost:8070/enfant/retrieve-enfant/";
  private baseURLUpdate = "http://localhost:8070/enfant/modify-enfant";
  private baseURLDelete = "http://localhost:8070/enfant/remove-enfant";
  private baseURLSearch = "http://localhost:8070/enfant/Recherche";
  private baseURLGetPDF ="http://localhost:8070/enfant/export/excel";
  private baseURLUpload ="http://localhost:8070/enfant/upload";
  constructor(private httpClient: HttpClient) { }

getEnfantList(): Observable<Enfant[]>{

return this.httpClient.get<Enfant[]>(`${this.baseURLGet}`);

}

getEnfantNb(){

  return this.httpClient.get(`${this.baseURLGetN}`);

  }

  getEnfantNbG(){

    return this.httpClient.get(`${this.baseURLGetNG}`);

    }
    getEnfantNbF(){

      return this.httpClient.get(`${this.baseURLGetNF}`);

      }

addEnfant(enfant: Enfant): Observable<Enfant>{
  console.log(enfant);
  return this.httpClient.post<Enfant>(`${this.baseURLPost}`, enfant);
}

getEnfantById(id:number): Observable<Enfant>{

  return this.httpClient.get<Enfant>(`${this.baseURLGetEById}/${id}`);

  }
  UpdateEnfant(enfant:Enfant): Observable<Object>{

    return this.httpClient.put<Enfant>(`${this.baseURLUpdate}`,enfant);

    }

    DeleteEnfant(id:number): Observable<Object>{

      return this.httpClient.delete<Enfant>(`${this.baseURLDelete}/${id}`);

      }

      getData(enfant : Enfant)
      {
        let url = this.baseURLSearch;
        return  this.httpClient.post<Enfant>(url, enfant);
      }


      getEnfantPDF(){

        return this.httpClient.get(`${this.baseURLGetPDF}`);

        }

        upload(formData: FormData): Observable<HttpEvent<string[]>> {
          return this.httpClient.post<string[]>(`${this.baseURLUpload}`, formData, {
            reportProgress: true,
            observe: 'events'
          });
        }

        postFileRec(file: FormData):Observable<any> {
          const endpoint = 'http://localhost:8080/enfant/uploadImage';
          return this.httpClient.post(endpoint, file);
        }

}
