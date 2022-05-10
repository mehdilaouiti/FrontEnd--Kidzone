import { Component, OnInit } from '@angular/core';
import {ChartType, GoogleChartComponent} from 'angular-google-charts';
import { Publication } from '../publication';
import { PublicationService } from '../publication.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

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
  constructor(public service:PublicationService) { }

  ngOnInit(): void {

    let resp=this.service.getpubList().subscribe((data)=>
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

}


