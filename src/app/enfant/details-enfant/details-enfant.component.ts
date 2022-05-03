import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Enfant } from '../enfant';
import { EnfantService } from '../enfant.service';

@Component({
  selector: 'app-details-enfant',
  templateUrl: './details-enfant.component.html',
  styleUrls: ['./details-enfant.component.css']
})
export class DetailsEnfantComponent implements OnInit {
id:number;
enfant:Enfant;
  constructor(private route:ActivatedRoute,private enfantService:EnfantService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.enfant = new Enfant();
    this.enfantService.getEnfantById(this.id).subscribe(data=> {
      this.enfant = data;
    })
  }

}
