import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RendezVous } from '../rendez-vous';
import { RendezVousService } from '../rendez-vous.service';

@Component({
  selector: 'app-update-rendez-vous',
  templateUrl: './update-rendez-vous.component.html',
  styleUrls: ['./update-rendez-vous.component.css']
})
export class UpdateRendezVousComponent implements OnInit {
  id: number;
  rdv: RendezVous = new RendezVous();
  constructor(private rdvs: RendezVousService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.rdvs.getRendezVousById(this.id).subscribe(data => {
      this.rdv = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.rdvs.updateRendezVous(this.rdv).subscribe( data =>{
      this.goToRendezVousList();
    }
    , error => console.log(error));
  }
  goToRendezVousList(){
    this.router.navigate(['/rendez-vous']);
  }
}
