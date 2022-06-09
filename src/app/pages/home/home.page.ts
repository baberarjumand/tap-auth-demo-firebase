import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isLoading = true;
  currentUserObj: firebase.User;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getCurrentUser().subscribe((currentUser) => {
      console.log('Current User Details:', currentUser);
      this.currentUserObj = currentUser;
      this.isLoading = false;
    });
  }

  signOut() {
    this.authService.signOut();
  }
}
