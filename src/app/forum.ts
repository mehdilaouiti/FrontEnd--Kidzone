import { sujet } from "./sujet";

export class forum {
    id: number;
    titre: String;
    description: String;
    sujets: Array<String>;
    constructor(titre:string="",description:string=""){
        
        this.titre = titre;
        this.description = description;
      }
}
