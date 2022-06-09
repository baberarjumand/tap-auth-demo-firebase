import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-finish-sign-in',
  templateUrl: './finish-sign-in.page.html',
  styleUrls: ['./finish-sign-in.page.scss'],
})
export class FinishSignInPage implements OnInit {
  isLoading = true;

  constructor(private auth: AngularFireAuth, private router: Router) {}

  ngOnInit() {
    if (this.auth.isSignInWithEmailLink(window.location.href)) {
      const email = window.localStorage.getItem('emailForSignIn');

      if (!email) {
        alert(
          'Please use the same device to sign in where you requested the sign-in link from.'
        );
        this.router.navigate(['login']);
        return;
      }

      this.auth
        .signInWithEmailLink(email, window.location.href)
        .then(() => {
          window.localStorage.removeItem('emailForSignIn');
          this.router.navigate(['']);
        })
        .catch((err) => {
          console.error(
            'There was an error when signing in using the email link:',
            err
          );
        });
    }
  }
}
