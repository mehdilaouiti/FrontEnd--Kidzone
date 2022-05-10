import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamation } from '../reclamation';
import { ReclamtionService } from '../reclamtion.service';

@Component({
  selector: 'app-update-reclamation',
  templateUrl: './update-reclamation.component.html',
  styleUrls: ['./update-reclamation.component.css']
})
export class UpdateReclamationComponent implements OnInit {

  id: number;
  rec: Reclamation = new Reclamation();
  constructor(private recs: ReclamtionService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.recs.getReclamationById(this.id).subscribe(data => {
      this.rec = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.recs.updateReclamation(this.rec).subscribe( data =>{
      this.goToRendezVousList();
    }
    , error => console.log(error));
  }
  goToRendezVousList(){
    this.router.navigate(['/reclamation']);
  }

}
