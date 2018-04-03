import { Component, OnInit } from '@angular/core';
import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [AuthService]
})
export class AuthComponent implements OnInit {

  constructor(public authService: AuthService) {

   }
  
  ngOnInit() {
    
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
