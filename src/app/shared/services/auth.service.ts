import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { take, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public auth: AngularFireAuth, private router: Router) {}

  getCurrentUser(): Observable<firebase.User> {
    return this.auth.user.pipe(take(1));
  }

  isCurrentUserAuthenticated() {
    return this.getCurrentUser().pipe(
      map((currentUser) => {
        console.log('currentUser:', currentUser);
        return !!currentUser;
      })
    );
  }

  signInAnonymous() {
    return this.auth.signInAnonymously();
  }

  signOut() {
    this.auth.signOut().then(() => {
      this.router.navigate(['login']);
    });
  }
}
