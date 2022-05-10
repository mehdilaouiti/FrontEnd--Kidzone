import { Component, OnInit } from '@angular/core';

import { SujetService } from '../sujet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { sujet } from '../sujet';
import { Reponse } from '../reponse';
import { NgToastService } from 'ng-angular-popup';
import { ReponseService } from '../reponse.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-list-reponse-f',
  templateUrl: './list-reponse-f.component.html',
  styleUrls: ['./list-reponse-f.component.css']
})
export class ListReponseFComponent implements OnInit {

  id: number;
  reponse: Reponse = new Reponse();
  sujets: sujet[];
  filterTerm!: string;
  reponses: Reponse[];
  public id2: number;
  constructor(private reponseService: ReponseService,  private router: Router,private route: ActivatedRoute,private toast : NgToastService,private session:SessionService) { }
 
  ngOnInit(): void {
    if (this.session.getUser() == null){
      this.router.navigate(['/users/connexion'])
    }
    
    
    this.route.params.subscribe( params => {
      this.id=+params.get('id')
       console.log(this.id); })
   this.getReponse();
  }
  
 private getReponse(){
  this.id = this.route.snapshot.params['id'];
   this.reponseService.getReponseyId(this.id).subscribe(data => {
     this.reponses = data;
   });
   
  }
  GoReponses()
  {this.router.navigate(['/forumsF']);
}
addreponse(){
    
    
  this.router.navigate(['create-reponse-f',this.id ]);}
}
