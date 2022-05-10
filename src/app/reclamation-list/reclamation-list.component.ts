import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { ReclamtionService } from '../reclamtion.service';

@Component({
  selector: 'app-reclamation-list',
  templateUrl: './reclamation-list.component.html',
  styleUrls: ['./reclamation-list.component.css']
})
export class ReclamationListComponent implements OnInit {
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  filterTerm : string;
  Rec: any;
  constructor( private recs: ReclamtionService,
    private router: Router, private postService: PostService ) { }

  ngOnInit(): void {
    this.getRecs();
    this.fetchPosts();
  }
  fetchPosts(): void {
    this.postService.getAllPosts().subscribe(
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
  private getRecs(){
    this.recs.getRecList().subscribe((data) =>{
      this.Rec = data ;
      console.log(data);
    })
   
    

  }

updateReclamtion(idRec: number){
  this.router.navigate(['update-reclamation', idRec]);
}
deleteReclamation(id: number){
  this.recs.deleteReclamation(id).subscribe( data => {
    console.log(data);
    this.getRecs();
  })
    
}
 
  
 
}
