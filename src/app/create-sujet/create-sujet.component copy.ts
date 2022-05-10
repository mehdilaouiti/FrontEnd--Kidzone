import { Component, OnInit } from '@angular/core';

import { forum } from '../forum';
import { ForumService } from '../forum.service';
import { SujetService } from '../sujet.service';
import { SujetsListComponent } from '../sujets-list/sujets-list.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { sujet } from '../sujet';
@Component({
  selector: 'app-create-sujet',
  templateUrl: './create-sujet.component.html',
  styleUrls: ['./create-sujet.component.css']
})
export class CreateSujetComponent implements OnInit {

  
  sujet: sujet = new sujet();
  constructor(private forumService: ForumService,  private router: Router,private sujetService : SujetService,private route: ActivatedRoute) { }


  ngOnInit(): void {
  }
  saveEmployee(){
    this.sujetService.createsujet(this.sujet.id_forum = this.route.snapshot.params['id_forum'],this.sujet).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/forums']);
  }
  
  onSubmit(){
    
    console.log(this.sujet);
    this.saveEmployee();
  }
}
