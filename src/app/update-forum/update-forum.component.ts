import { Component, OnInit } from '@angular/core';
import { forum } from '../forum';
import { ForumService } from '../forum.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-forum',
  templateUrl: './update-forum.component.html',
  styleUrls: ['./update-forum.component.css']
})
export class UpdateForumComponent implements OnInit {

  id: number;
  forum: forum = new forum();
  constructor(private forumservice: ForumService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.forumservice.getForumById(this.id).subscribe(data => {
      this.forum = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.forumservice.updateForum(this.id, this.forum).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/forums']);
  }
}
