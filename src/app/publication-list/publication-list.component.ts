import { Component, OnInit } from '@angular/core';
import { forum } from '../forum';
import { ForumService } from '../forum.service';
import { SujetService } from '../sujet.service';
import { SujetsListComponent } from '../sujets-list/sujets-list.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { sujet } from '../sujet';

import { NgToastService } from 'ng-angular-popup';
import { Publication } from '../publication';
import { PublicationService } from '../publication.service';
import { ExportToCsv } from 'export-to-csv';
import { SessionService } from '../services/session.service';
import {ChartType, GoogleChartComponent} from 'angular-google-charts';


@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit {
  publications: Publication[];
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
    let resp=this.publicationservice.getpubList().subscribe((data)=>
    {this.listPub=data
 
      for( let a of this.listPub )
      {
        this.cloture+=a.likes.length;
      this.noncloture+=a.comments.length;
 
      }
 
      this.dataRec = [
        ['LIKES' , this.cloture],
        ['COMMENTS', this.noncloture],
 
      ];
    });
  }
 public getForums(){
   this.publicationservice.getpubList().subscribe(data => {
     this.publications = data;
   });
  
  
}
export()
{
  this.publicationservice.getpubList().subscribe(data => {
    this.publications = data;
  });
  const options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: true,
    title: 'My Awesome CSV',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
  };
 
const csvExporter = new ExportToCsv(options);
 
csvExporter.generateCsv(this.publications);
}
}
