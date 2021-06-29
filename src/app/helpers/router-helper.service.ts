import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterHelperService {

  constructor(
    private router: Router
  ) { }

  
  IsRouteActive(routes:Array<string>) : Boolean
  {
    var isActive = false; 
    routes.forEach(route => {
      isActive = this.router.url === route;
    });
    return isActive;
  } 
}
