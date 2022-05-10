import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Publication } from '../publication';
import { PublicationService } from '../publication.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-mypubs',
  templateUrl: './mypubs.component.html',
  styleUrls: ['./mypubs.component.css']
})
export class MypubsComponent implements OnInit {
  publications: Publication[];
  id: number;
  constructor(private router: Router,private pubservice: PublicationService, private toast : NgToastService ,private session:SessionService) { }
  
  ngOnInit(): void {
  
  if (this.session.getUser() == null){
    this.router.navigate(['/users/connexion'])
  }
  this.getForums();
}
public getForums(){
  this.id=this.session.getUser().idUser
 this.pubservice.getuserList( this.id).subscribe(data => {
   this.publications = data;
 });

}
deleteforum(id: number){
  this.pubservice.deleteforum(id).subscribe( data => {
    console.log(data);
    this.toast.error({detail:"DELETE",summary:'Publication Deleted',sticky:true});
    this.getForums();
  })
}
updateforum(id: number){
  this.router.navigate(['update-pub', id]);
}
}
