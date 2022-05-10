import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../Model/user';
import { SessionService } from '../../services/session.service';
import { UserService } from '../../services/user.service';
import { NgToastService } from 'ng-angular-popup';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';
@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean;
  loginError: boolean;
  connectionForm: FormGroup;
  constructor(private fb: FormBuilder, private us: UserService, private route: Router, private session: SessionService,private toast:NgToastService,   private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
    if (this.session.getUser() != null){
      this.route.navigate(['/users/profile'])
    }
    this.loginError = false;
    this.connectionForm = this.fb.group(
      {
        'email': ['', [Validators.required, Validators.email]],
        'psw': ['', Validators.required],
      }
    )
      this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log(this.socialUser);
      let response = this.us.doConnectiongoogle(this.socialUser.email);
      response.subscribe((data) => {
        if (data.idUser != 0) {
          this.session.setUser(data)
          
          this.loginError = false;
          this.route.navigate(['/users']);
          this.toast.success({detail:"Message Success",summary:"Login successful",duration:5000})
        } else {
          this.loginError = true;
        }
      });
      

    });
  }

  connecter(f: FormGroup) {
    let response = this.us.doConnection(f.value.email, f.value.psw);
    response.subscribe((data) => {
      if (data.idUser != 0) {
        this.session.setUser(data)
        
        this.loginError = false;
        this.route.navigate(['/users']);
        this.toast.success({detail:"Message Success",summary:"Login successful",duration:5000})
      } else {
        this.loginError = true;
      }
    });
  }
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 /* ll(): void {
    this.loginWithGoogle();
    let response = this.us.doConnectiongoogle(this.socialUser.email);
    response.subscribe((data) => {
      if (data.idUser != 0) {
        this.session.setUser(data)
        
        this.loginError = false;
        this.route.navigate(['/users']);
        this.toast.success({detail:"Message Success",summary:"Login successful",duration:5000})
      } else {
        this.loginError = true;
      }
    });



  }*/
  logOut(): void {
    this.socialAuthService.signOut();
  }



}
