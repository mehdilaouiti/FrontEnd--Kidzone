import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enfant } from '../enfant';
import { EnfantService } from '../enfant.service';

@Component({
  selector: 'app-update-enfant',
  templateUrl: './update-enfant.component.html',
  styleUrls: ['./update-enfant.component.css'],
  providers: [DatePipe]
})
export class UpdateEnfantComponent implements OnInit {
  id:number;
  enfant:Enfant= new Enfant();
  constructor(private enfantService: EnfantService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.enfantService.getEnfantById(this.id).subscribe(data => {
      this.enfant=data;
      console.log(data);
  }, error => console.log(error));
  }

  onSubmit(){
    this.enfantService.UpdateEnfant(this.enfant).subscribe(data=>{
      this.goToEnfants();

    }, error => console.log(error));
  }

    goToEnfants(){
      this.router.navigate(['/enfants']);
    }
  }

