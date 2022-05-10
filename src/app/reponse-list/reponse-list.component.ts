import { Component, OnInit } from '@angular/core';

import { SujetService } from '../sujet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { sujet } from '../sujet';
import { Reponse } from '../reponse';
import { ReponseService } from '../reponse.service';
import { NgToastModule, NgToastService } from 'ng-angular-popup'
import { GoogleChartComponent } from 'angular-google-charts';  
@Component({
  selector: 'app-reponse-list',
  templateUrl: './reponse-list.component.html',
  styleUrls: ['./reponse-list.component.css']
})
export class ReponseListComponent implements OnInit {

  id: number;
  reponse: Reponse = new Reponse();
 reponses: Reponse[];
 filterTerm!: string;
  constructor(private reponseService: ReponseService,  private router: Router,private route: ActivatedRoute,private toast : NgToastService) { }

  ngOnInit(): void {
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
  
  addreponse(){
    this.router.navigate(['create-reponse', this.id]);}
  getreponses(){
    this.router.navigate(['reponses']);
  }
  updatesujet(id: number){
    this.router.navigate(['update-reponse', id]);
  }
  deletereponse(id: number){
      this.reponseService.deleteReponse(id).subscribe( data => {
        console.log(data);
        this.toast.error({detail:"DELETE",summary:'Forum Deleted',sticky:true});
        this.getReponse();
      })
    }
  }


