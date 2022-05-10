import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../Model/user';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User
  @Output() notification = new EventEmitter<User>();
  constructor(private session: SessionService,private us:UserService,private fb: FormBuilder) { }
  userForm: FormGroup
  ngOnInit(): void {
    this.userForm = this.fb.group(
      {
        'badge': [''],
      }
    )
  }

  notifyParent() {
    if (confirm("Confirmer la suppression de " + this.user.prenom + " " + this.user.nom)) {
      this.notification.emit(this.user)
    }
  }
  updateRoleUser(f:FormGroup) {
    this.user.badge = f.value.badge
    console.log(this.user)
    let response =this.us.updateUser(this.user);
    response.subscribe((data)=>
    {
      console.log(this.user)
    });
  }

}
