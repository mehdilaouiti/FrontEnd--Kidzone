import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publication } from '../publication';
import { User } from '../Model/user';
import { PublicationService } from '../publication.service';
import { LikePosts } from '../like-posts';
import { LikePostsService } from '../like-posts.service';
import { Comments } from '../comments';
import { CommentsService } from '../comments.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { SessionService } from '../services/session.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  FormRec: FormGroup;
  id: number;
  nbr:number;
  nbr2:number;
  publications: Publication;
  Likee : LikePosts;
  comments : Comments;
  comment:Comments[];
  constructor(private PublicationService: PublicationService,
    private route: ActivatedRoute,private LikePostsService :LikePostsService,private CommentsService : CommentsService,
    private router: Router,formBuilder: FormBuilder,private toast : NgToastService,private session:SessionService) { }
 
    ngOnInit(): void {
      if (this.session.getUser() == null){
        this.router.navigate(['/users/connexion'])
      }
      this.id = this.route.snapshot.params['id'];
      this.getComments();
      this.PublicationService.getPubbyId(this.id).subscribe(data => {
       this.publications = data;
       console.log(this.publications.likes.length);
     }, error => console.log(error));
    
     
     this.FormRec= new FormGroup({
   
      'messageReclamation': new FormControl('',[Validators.required] ),
      
    })}
    ngOnInit2(int: number): void {
      this.id = this.route.snapshot.params['id'];
       nbr2: Number;
      this.getComments();
      this.PublicationService.getPubbyId(this.id).subscribe(data => {
       this.publications = data;

       console.log(this.publications.likes.length);
       if (this.publications.likes.length>int)
       {
         this.toast.success({detail:"ADD",summary:'Like ADDED',sticky:true});
       }
       else{
         this.toast.warning({detail:"Like",summary:'YOU ALREADY LIKED THE POST',sticky:true});
       }
     }, error => console.log(error));
     
     
    
     this.FormRec= new FormGroup({
   
      'messageReclamation': new FormControl('',[Validators.required] ),
      
      
    })}
    Like(id: number)
    {
      this.id = this.route.snapshot.params['id'];
      this.PublicationService.getPubbyId(this.id).subscribe(data => {
        this.publications = data;
        this.nbr=this.publications.likes.length;
        console.log(this.nbr);
        
      }, error => console.log(error));
     
      this.Likee=new LikePosts(true);
      this.LikePostsService.Like(this.Likee,this.id,this.session.getUser().idUser).subscribe( data =>{
        console.log(data);
        console.log(this.publications.likes.length);
        this.ngOnInit2(this.nbr);
      },
      error => console.log(error));
    }
    deletelike(id: number){
      this.LikePostsService.deletelike(id).subscribe( data => {
        console.log(data);
        this.toast.error({detail:"UNLIKE",summary:'UNLIKE POST ',sticky:true});
        setTimeout(() => 
        {
          location.reload();
        },
        5000);
      })
    }
     
            
    
    saveEmployee(){
    
      this.id = this.route.snapshot.params['id'];
      
      this.CommentsService.Addcomment(this.comments,this.id).subscribe( data =>{
        console.log(data);
       
        
      },
      error => console.log(error));
    }
  
 
    
    onSubmit(id: number){
      
      console.log(this.comments);
      
      this.saveEmployee();
      
    }
    saveRec(form:FormGroup){
      this.id = this.route.snapshot.params['id'];
      this.comments=new Comments(form.value.messageReclamation,this.session.getUser());
   
      
      this.toast.success({detail:"ADD",summary:'Comment ADDED',sticky:true});
      this.CommentsService.Addcomment(this.comments,this.id).subscribe( data =>{
        console.log(data);
        
        
      },
      error => console.log(error));
      setTimeout(() => 
{
  location.reload();
},
5000);
   
    }
    private getComments(){
      this.id = this.route.snapshot.params['id'];
       this.CommentsService.getCombyId(this.id).subscribe(data => {
         this.comment = data;
         
       });
       
      }

  }


