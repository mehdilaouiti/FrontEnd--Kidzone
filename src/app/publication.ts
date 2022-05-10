import { User } from "./Model/user";

export class Publication {
    id: number;
    title: string;
    publication_txt:string;
    createdAt:Date;
    updatedAt:Date;
    likes: Array<String>;
    comments: Array<String>;
    imagepub:string ;
    user:User;
    constructor(idReclamation: number, objet: string, messageReclamation: string, imageReclamation: string, dateReclamation: Date,user: User) {
        this.id = idReclamation;
        this.title = objet;
        this.publication_txt = messageReclamation;
        if (imageReclamation!="" && !imageReclamation.includes("/assets/img/"))
        { this.imagepub = "/assets/img/PubPic/" +imageReclamation;}
        else { this.imagepub = imageReclamation}
        this.createdAt = dateReclamation;
        this.user = user;
        
      }
     
}
