import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  sendToken(token: string){
    return this.http.post<any>("https://micasalux-captcha-endpoint.azurewebsites.net/token_validate", {recaptcha: token})
  }
}
