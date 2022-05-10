import {formatDate, getLocaleDateFormat} from '@angular/common';
export class sujet {
    id: number;
    titre: String;
    description: String;
    dateCreation =  Date;
    id_forum : number;
    Reponses: Array<String>;
    constructor(titre:string="",description:string="",id_forum:number=20){
       
        
      }
}