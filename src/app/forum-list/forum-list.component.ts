import { Component, OnInit } from '@angular/core';
import { forum } from '../forum';
import { ForumService } from '../forum.service';
import { SujetService } from '../sujet.service';
import { SujetsListComponent } from '../sujets-list/sujets-list.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { sujet } from '../sujet';

import { NgToastService } from 'ng-angular-popup';
import { SessionService } from '../services/session.service';
@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.css']
})
export class ForumListComponent implements OnInit {
  starRating = 0; 
Forums: forum[];
sujets: sujet[];
filterTerm!: string;
  constructor(private forumService: ForumService,  private router: Router,private sujetService : SujetService,private toast : NgToastService ,private session:SessionService) { }
 
  ngOnInit(): void {
    if (this.session.getUser() == null){
      this.router.navigate(['/users/connexion'])
    }
    this.getForums();
  }
 public getForums(){
   this.forumService.getForumList().subscribe(data => {
     this.Forums = data;
   });
 
}
private getsujets(){
  this.sujetService.getSujetList().subscribe(data => {
    this.sujets = data;
  });
}
getforumss() {
  this.router.navigate(['forums']);
}
front() {
  this.router.navigate(['forumss']);
}

forumDetails(id: number){
  this.router.navigate(['forum-details', id]);
}
Gosujets(id: number)
{this.router.navigate(['/sujets',id]);}
updateforum(id: number){
  this.router.navigate(['update-forum', id]);
}
addforum(){
  this.router.navigate(['create-Forum']);
}
addsujet(id: number){
  this.router.navigate(['create-sujet', id]);
}
deleteforum(id: number){
    this.forumService.deleteforum(id).subscribe( data => {
      console.log(data);
      this.toast.error({detail:"DELETE",summary:'Forum Deleted',sticky:true});
      this.getForums();
    })
  }
}


