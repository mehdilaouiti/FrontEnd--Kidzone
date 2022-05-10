import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { forum } from '../forum';
import { ForumService } from '../forum.service';
import { SujetService } from '../sujet.service';
import { SujetsListComponent } from '../sujets-list/sujets-list.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { sujet } from '../sujet';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-create-sujet',
  templateUrl: './create-sujet.component.html',
  styleUrls: ['./create-sujet.component.css']
})
export class CreateSujetComponent implements OnInit {

  id: number;
  sujet: sujet = new sujet();
  public id2:number;
 
  constructor(private router: Router,private sujetService : SujetService,private route: ActivatedRoute,private toast : NgToastService ) { }


  ngOnInit(): void {

    
   }
  saveEmployee(){
    
    this.id = this.route.snapshot.params['id'];
    this.sujetService.createsujet(this.id,this.sujet).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/sujets',this.id]);
  }
  
  onSubmit(){
    
    console.log(this.sujet);
    this.toast.success({detail:"ADD",summary:'Sujet ADDED',sticky:true});
    this.saveEmployee();
  }
}
