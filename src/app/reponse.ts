export class Reponse {
   
        id: number;
        message: String;
        description: String;
        date_creation : Date;
       
        constructor(titre:string="",description:string="",id_forum:number=20){
            
            this.message = titre;
          
            
          }
}
