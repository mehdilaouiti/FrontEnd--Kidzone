import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { sujet } from '../sujet';
import { SujetService } from '../sujet.service';

@Component({
  selector: 'app-update-sujet',
  templateUrl: './update-sujet.component.html',
  styleUrls: ['./update-sujet.component.css']
})
export class UpdateSujetComponent implements OnInit {

  id: number;
  sujet: sujet = new sujet();
  constructor(private SujetService: SujetService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {

    
    }
   saveEmployee(){
     
     this.id = this.route.snapshot.params['id2'];
     this.SujetService.getSujetyId(this.id).subscribe(data => {
      this.sujet = data;
    }, error => console.log(error));
     this.SujetService.updateSujet(this.id,this.sujet).subscribe( data =>{
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
    
     this.saveEmployee();
   }
 }
 