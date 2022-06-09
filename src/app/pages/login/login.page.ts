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
}
