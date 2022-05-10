import { Component, OnInit } from '@angular/core';
import { sujet } from '../sujet';
import { Reponse } from '../reponse';
import { ActivatedRoute, Router } from '@angular/router';
import { SujetService } from '../sujet.service';
import { ReponseService } from '../reponse.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-create-reponse',
  templateUrl: './create-reponse.component.html',
  styleUrls: ['./create-reponse.component.css']
})
export class CreateReponseComponent implements OnInit {

  id: number;
  sujet: sujet = new sujet();
  reponse: Reponse = new Reponse()
  public id2:number;
  constructor(private router: Router,private reponseService : ReponseService,private route: ActivatedRoute,private toast : NgToastService ) { }


  ngOnInit(): void {

    
   }
  saveEmployee(){
    
    this.id = this.route.snapshot.params['id'];
    this.reponseService.createReponse(this.id,this.reponse).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/reponses',this.id]);
  }
  
  onSubmit(){
    
    console.log(this.reponse);
    this.toast.success({detail:"ADD",summary:'Response ADDED',sticky:true});
    this.saveEmployee();
  }
}
