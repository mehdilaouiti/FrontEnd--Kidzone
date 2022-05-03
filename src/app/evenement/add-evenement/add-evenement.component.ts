import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EvenementService } from 'src/app/services/evenement.service';
import { Evenement } from '../Evenement';

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
  styleUrls: ['./add-evenement.component.css']
})
export class AddEvenementComponent implements OnInit {


  evenement : Evenement = new Evenement();
  constructor(private evenementService: EvenementService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEvenement(){
    this.evenementService.createEvenement(this.evenement).subscribe (data => {
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
