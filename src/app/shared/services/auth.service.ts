import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { take, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ActionCodeSettings } from '@angular/fire/auth';

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
      map((currentUser) => !!currentUser)
    );
  }

  signInAnonymous() {
    return this.auth.signInAnonymously();
  }

  signInWithEmailLink(email: string) {
    const actionCodeSettings: ActionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: window.location.origin + '/finish-sign-in',
      // This must be true.
      handleCodeInApp: true,
      // iOS: {
      //   bundleId: 'com.example.ios'
      // },
      // android: {
      //   packageName: 'com.example.android',
      //   installApp: true,
      //   minimumVersion: '12'
      // },
      // dynamicLinkDomain: 'example.page.link'
    };

    return this.auth.sendSignInLinkToEmail(email, actionCodeSettings);
  }

  signOut() {
    this.auth.signOut().then(() => {
      this.router.navigate(['login']);
    });
  }
}
