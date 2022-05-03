import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvenementService } from 'src/app/services/evenement.service';
import { Evenement } from '../Evenement';

@Component({
  selector: 'app-evenement-details',
  templateUrl: './evenement-details.component.html',
  styleUrls: ['./evenement-details.component.css']
})
export class EvenementDetailsComponent implements OnInit {


  id : number
  evenement: Evenement
  constructor(private route: ActivatedRoute, private evenementService : EvenementService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.evenement = new Evenement();
    this.evenementService.getEvenementById(this.id).subscribe(data => {
      this.evenement = data;
    })
  }

}
