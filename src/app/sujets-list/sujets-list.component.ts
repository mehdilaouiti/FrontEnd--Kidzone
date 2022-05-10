import {DatePipe, formatDate} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SujetService } from '../sujet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { sujet } from '../sujet';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-sujets-list',
  templateUrl: './sujets-list.component.html',
  styleUrls: ['./sujets-list.component.css']
})
export class SujetsListComponent implements OnInit {
  id: number;
  sujet: sujet = new sujet();
  sujets: sujet[];
  public id2: String;
  filterTerm!: string;

  constructor(private sujetService: SujetService,  private router: Router,private route: ActivatedRoute,private toast : NgToastService) 
  { // Print the parameter to the console. 

}
     

  ngOnInit(): void {
   
    this.route.params.subscribe( params => {
      this.id=+params.get('id')
       console.log(this.id); })
   this.getSujet();
   
  }
  
 private getSujet(){
  
  this.id = this.route.snapshot.params['id'];
   this.sujetService.getSujetyId(this.id).subscribe(data => {
     this.sujets = data;
   });
   
  }
  GoReponses(id: number)
{this.router.navigate(['/reponses', id]);}
  addsujet(){
    
    
    this.router.navigate(['create-sujet',this.id ]);}
  getsujets(){
    this.router.navigate(['sujets']);
  }
  
  deletesujet(id: number){
      this.sujetService.deleteSujet(id).subscribe( data => {
        console.log(data);
        this.toast.error({detail:"DELETE",summary:'Forum Deleted',sticky:true});
        this.getSujet();
        
      })
    }
  }
