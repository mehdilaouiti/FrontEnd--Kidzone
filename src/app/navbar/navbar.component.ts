import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/user';
import { SessionService } from '../services/session.service';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user2: User;
  data: any;
  check1: boolean;
  check2: boolean;
  check3: boolean;
  check4: boolean;

  listCatP:any;

  checkRec:boolean;

  constructor(private route: Router, private session : SessionService,private socialAuthService: SocialAuthService) {
  }

  ngOnInit(): void {
    this.user2;
    this.check1 = true;
    this.check2 = false;
    this.check3 = false;
    this.check4 = false;
    this.checkRec = false;
  }
  changeCheck1() {
    this.check1 = true;
    this.check2 = false;
    this.check3 = false;
    this.check4 = false;
    this.checkRec = false;
  }
  changeCheck2() {
    this.check1 = false;
    this.check2 = true;
    this.check3 = false;
    this.check4 = false;
    this.checkRec = false;
  }
  changeCheck3() {
    this.check1 = false;
    this.check2 = false;
    this.check3 = true;
    this.check4 = false;
    this.checkRec = false;
  }
  changeCheck4() {
    this.check1 = false;
    this.check2 = false;
    this.check3 = false;
    this.check4 = true;
    this.checkRec = false;
  }
  changeCheckRec(){
    this.check1 = false;
    this.check2 = false;
    this.check3 = false;
    this.check4 = false;
    this.checkRec = true;
  }
  getUserType(): string {
    return this.session.getSessionType();
  }

  disconnect() {
    this.session.clearSession();
   
    this.socialAuthService.signOut();

    this.route.navigate(['/users/connexion']);
  }
}
