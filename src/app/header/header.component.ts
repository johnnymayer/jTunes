import { Component, OnInit } from '@angular/core';
import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase';
import { AuthService } from '../auth.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AuthGuard } from '../auth-guard.service';
import { andObservables } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {

  public isLoggedIn: Boolean = null;

  constructor(public authService: AuthService, public authGuard: AuthGuard) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    });
    
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
