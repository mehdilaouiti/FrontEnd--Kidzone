import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RendezVous } from '../rendez-vous';
import { RendezVousService } from '../rendez-vous.service';

@Component({
  selector: 'app-create-rendez-vous',
  templateUrl: './create-rendez-vous.component.html',
  styleUrls: ['./create-rendez-vous.component.css']
})
export class CreateRendezVousComponent implements OnInit {
  rdv: RendezVous = new RendezVous();
  constructor(private rdvs: RendezVousService, private router: Router) { }

  ngOnInit(): void {
  }
  saveMeeting(){
    this.rdvs.ajouterRendezVous(this.rdv).subscribe( data =>{
      this.goToRendezVousList();
    },
    error => console.log(error));
    
  }
  goToRendezVousList(){
    this.router.navigate(['/rendez-vous']);
  }

  onSubmit(){ 
    console.log(this.rdv);
    this.saveMeeting();
  }
}
