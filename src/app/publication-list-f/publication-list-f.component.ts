import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartType } from 'chart.js';
import { User } from '../Model/user';
import { Publication } from '../publication';
import { PublicationService } from '../publication.service';
import { SessionService } from '../services/session.service';
import { SujetService } from '../sujet.service';

@Component({
  selector: 'app-publication-list-f',
  templateUrl: './publication-list-f.component.html',
  styleUrls: ['./publication-list-f.component.css']
})
export class PublicationListFComponent implements OnInit {

  publications: Publication[];
pub :Publication;
listPub:any;
  cloture:number=0;
  noncloture:number=0;
  title = 'Statistique PUBLICATIONS';
  type = 'PieChart' as ChartType;
  columnNames = ['LIKES', 'COMMENTS'] ;
  options = {   is3D: true};
  dataRec=[] as any;
  width = 0;
  height = 0;
  constructor(private publicationservice: PublicationService,  private router: Router,private sujetService : SujetService,private session:SessionService) { }

  ngOnInit(): void {
    if (this.session.getUser() == null){
      this.router.navigate(['/users/connexion'])
    }
    this.getForums();
  
  }

 public getForums(){
   this.publicationservice.getpubList().subscribe(data => {
     this.publications = data;
     console.log(this.pub.user.nom)
   });
 
}
seepost(id: number){
  this.router.navigate(['seepost', id]);
}
create(){
  this.router.navigate(['create-Pub']);
}
mypubs(){
  this.router.navigate(['mypubs']);
}
}


