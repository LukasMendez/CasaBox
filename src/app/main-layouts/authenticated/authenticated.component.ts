import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bruger } from 'src/app/models/bruger';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.css']
})
export class AuthenticatedComponent implements OnInit {

  currentUser: Bruger;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
      this.authenticationService.logout()
      window.location.reload();
  }

  ngOnInit(): void {
  }

}
