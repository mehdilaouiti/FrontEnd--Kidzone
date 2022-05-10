import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forum } from '../forum';
import { ForumService } from '../forum.service';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { SessionService } from '../services/session.service';
@Component({
  selector: 'app-list-forum-f',
  templateUrl: './list-forum-f.component.html',
  styleUrls: ['./list-forum-f.component.css']
})
export class ListForumFComponent implements OnInit {
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  
  Forums: forum[];
  filterTerm!: string;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://www.facebook.com/groups/944143396251980';
  
  
  public typeData: Array<forum> = [];
  constructor(private forumService: ForumService, private router: Router,private session:SessionService) { }
 
  ngOnInit(): void {
    if (this.session.getUser() == null){
      this.router.navigate(['/users/connexion'])
    }
    this.getForums();
    this.fetchPosts();
 
  }
  
  fetchPosts(): void {
    this.forumService
    .getAllPosts().subscribe(
      (response) => {
        this.POSTS = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
  public getForums(){
    this.forumService.getForumList().subscribe(data => {
      this.Forums = data;
    });
}
Gosujets(id: number)
{this.router.navigate(['/sujetsF',id]);}
}
