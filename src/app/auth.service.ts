import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  public user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          // console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        }
      }
    );
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((res) => this.router.navigate(['admin']));
  }
  // isLoggedIn() {
  //   if (this.userDetails == null) {
  //     return false;
  //   } else {
  //     console.log("true")
  //     return true;
  //   }
  // }
  logout() {
    this.afAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }
}

