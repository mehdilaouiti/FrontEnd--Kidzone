import { Component, OnInit } from '@angular/core';
import { Evenement } from './Evenement';
import { EvenementService } from '../services/evenement.service';
import * as moment from 'moment';
import {Router} from '@angular/router'
import { DatePipe } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgPipesModule } from 'ngx-pipes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';




@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css'],
  providers: [DatePipe]


})
export class EvenementComponent implements OnInit {

  searchValue : string;
  p: number = 1;
  evenements : Evenement[];

  constructor(private evenmentService : EvenementService,
    private router : Router) { }


  ngOnInit(): void {
    this.getEvenements();


  }

  private getEvenements(){
    this.evenmentService.getevenementList().subscribe(data=> {
      console.log(data);
      data.forEach(element => {
        element.date_event = moment(element.date_event).toDate()
        element.heure_event = moment(element.heure_event).toDate()
      });
      this.evenements = data;

    });
  }
  evenementDetails(id:number){
    this.router.navigate(['evenement-details', id]);
  }
  updateEvenement (id: number){
    this.router.navigate(['update-evenement', id]);

  }

  deleteEvenement (id: number){
    this.evenmentService.deleteEvenement(id).subscribe (() => {
      // this.router.navigate(['/evenements']);
      // this.router.onSameUrlNavigation
      this.redirectTo("/evenements");
    },
    error => console.log(error));

  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }

 key: string = 'etat';
 reverse: boolean = false;
 sort(key :any){
   this.key=key;
   this.reverse= !this.reverse;
 }

}
