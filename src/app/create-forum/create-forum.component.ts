import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { forum } from '../forum';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-create-forum',
  templateUrl: './create-forum.component.html',
  styleUrls: ['./create-forum.component.css']
})
export class CreateForumComponent implements OnInit {

  forum: forum = new forum();
  public myForm: FormGroup;
  constructor(private forumservice: ForumService,
    private router: Router,private toast : NgToastService , formBuilder: FormBuilder) { 
      this.myForm = formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]]
      })
    }


  ngOnInit(): void {
  }
  get m(){
    return this.myForm.controls;
  }
  saveEmployee(){
    this.forumservice.createforum(this.forum).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/forums']);
  }
  
  onSubmit(){
    
    console.log(this.forum);
    this.toast.success({detail:"ADD",summary:'Forum ADDED',sticky:true});
    this.saveEmployee();
  }
  getforumss() {
    this.router.navigate(['forums']);
  }
}


