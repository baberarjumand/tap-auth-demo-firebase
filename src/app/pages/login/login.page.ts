import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLoading = false;
  emailInput = '';
  emailSubmitted = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  signInAnonymously() {
    this.isLoading = true;

    this.authService
      .signInAnonymous()
      .then(() => {
        this.isLoading = false;
        this.router.navigate(['']);
      })
      .catch((err) => {
        console.error('Error in signing in anonymously:', err);
      });
  }

  validateEmail(email: string): boolean {
    const emailPattern =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return emailPattern.test(email);
  }

  signInWithEmailLink() {
    this.isLoading = true;

    if (!this.validateEmail(this.emailInput)) {
      alert('Invalid email entered!');
      this.isLoading = false;
      return;
    }

    this.authService
      .signInWithEmailLink(this.emailInput)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem('emailForSignIn', this.emailInput);

        // alert(
        //   'Please sign in with the link that has been sent to your email: ' +
        //     this.emailInput
        // );

        this.emailSubmitted = true;
        this.isLoading = false;
      })
      .catch((err) => {
        console.error('Error in sending sign-in link:', err);
      });
  }

  resetForm() {
    this.emailSubmitted = false;
  }
}
