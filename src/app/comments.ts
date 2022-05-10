import { User } from "./Model/user";

export class Comments {
    id : number;
    comment_field :string;
    user:User;
    constructor(comment_field:string,user: User){
        
       
        this.comment_field = comment_field;
        this.user = user;
        

      }
}
