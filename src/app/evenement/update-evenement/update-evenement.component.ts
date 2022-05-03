import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvenementService } from 'src/app/services/evenement.service';
import { Evenement } from '../Evenement';
import * as moment from "moment";

@Component({
  selector: 'app-update-evenement',
  templateUrl: './update-evenement.component.html',
  styleUrls: ['./update-evenement.component.css']
})
export class UpdateEvenementComponent implements OnInit {


  id: number;
  evenement : Evenement = new Evenement();
  dateString: string;
  timeString: string;
  constructor( private evenementService: EvenementService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.evenementService.getEvenementById(this.id).subscribe(data =>{
      this.evenement = data;
      this.dateString = moment(this.evenement.date_event).format("YYYY-MM-DD");
      this.timeString = moment(this.evenement.heure_event).format("hh:mm");
      console.log(data);
  },  error => console.log(error));
}

saveEvenement(){
  this.evenement.date_event = moment(this.dateString).toDate();
  this.evenement.heure_event = moment(this.timeString).toDate();
  this.evenementService.updateEvenement(this.evenement).subscribe (data => {
    console.log(data);
    this.goToEvenement();
},
error => console.log(error));
}

goToEvenement(){
this.router.navigate(['/evenements']);
}


onSubmit(){
console.log(this.evenement);
this.saveEvenement();

}

}
