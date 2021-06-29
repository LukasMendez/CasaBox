import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

import { Bruger } from '../models/bruger';
import { AuthenticateDto } from '../models/authenticate-dto';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<Bruger>;
    public currentUser: Observable<Bruger>;
    

    constructor(
        private http: HttpClient, 
        public jwtHelper: JwtHelperService
    )
    {
        this.currentUserSubject = new BehaviorSubject<Bruger>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        
    }

    public get currentUserValue(): Bruger {
        return this.currentUserSubject.value;
    }

    // Login
    login(authenticateModel : AuthenticateDto) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Access-Control-Allow-Origin': '*'
            })
          };

        return this.http.post<Bruger>(environment.casaBoxApi + "/api/bruger/authenticate", authenticateModel)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    // Logout
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    // if already logged in
    isAuthenticated(): boolean {
        let currentUser = this.currentUserValue;
        const token = currentUser.token;
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token);
        
    }

}