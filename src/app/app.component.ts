import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterHelperService } from './helpers/router-helper.service';
import { Bruger } from './models/bruger';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CasaBoxApp';
  currentUser: Bruger;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      private routerHelperService : RouterHelperService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  public isRouteActive() : Boolean {
    var adminRoutes = new Array<string>('/bookinger','/udlejnings-administrering', '/casabox-administrering', '/admin-dashboard');
    return this.routerHelperService.IsRouteActive(adminRoutes);
  }


}
