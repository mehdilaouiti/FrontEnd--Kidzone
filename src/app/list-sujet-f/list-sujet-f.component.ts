import { Component, OnInit } from '@angular/core';
import { SujetService } from '../sujet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { sujet } from '../sujet';
import { NgToastService } from 'ng-angular-popup';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-list-sujet-f',
  templateUrl: './list-sujet-f.component.html',
  styleUrls: ['./list-sujet-f.component.css']
})
export class ListSujetFComponent implements OnInit {
 
  id: number;
  sujet: sujet = new sujet();
  sujets: sujet[];
  public id2: number;
  filterTerm!: string;
  constructor(private sujetService: SujetService,  private router: Router,private route: ActivatedRoute,private toast : NgToastService,private session:SessionService) { }
 
  ngOnInit(): void {
    if (this.session.getUser() == null){
      this.router.navigate(['/users/connexion'])
    }
    
    this.route.params.subscribe( params => {
      this.id2=+params.get('id')
       console.log(this.id); })
   this.getSujet();
  }

  private getSujet(){
  
    this.id = this.route.snapshot.params['id'];
     this.sujetService.getSujetyId(this.id).subscribe(data => {
       this.sujets = data;
     });
     
    }
    addsujet(){
    
    
      this.router.navigate(['create-sujet-f',this.id ]);}
    GoReponses(id: number)
    {this.router.navigate(['/reponsesF', id]);}
  }
