import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { HjemComponent } from './hjem/hjem.component';
import { OpbevaringComponent } from './opbevaring/opbevaring.component';
import { BoxstoerelserComponent } from './boxstoerelser/boxstoerelser.component';
import { SikkerhedComponent } from './sikkerhed/sikkerhed.component';
import { HvemViErComponent } from './hvem-vi-er/hvem-vi-er.component';
import { SalgLejeComponent } from './salg-leje/salg-leje.component';
import { KontorLejeComponent } from './kontor-leje/kontor-leje.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LejeProcessComponent } from './leje-process/leje-process.component';
import { UdlejningComponent } from './udlejning/udlejning.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { PublicComponent } from './main-layouts/public/public.component';
import { AuthenticatedComponent } from './main-layouts/authenticated/authenticated.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { JwtInterceptor, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ErrorInterceptor } from './helpers/error-interceptor';
import { JwtHelperService } from '@auth0/angular-jwt'

@NgModule({
  declarations: [
    AppComponent,
    HjemComponent,
    OpbevaringComponent,
    BoxstoerelserComponent,
    SikkerhedComponent,
    HvemViErComponent,
    SalgLejeComponent,
    KontorLejeComponent,
    KontaktComponent,
    LejeProcessComponent,
    UdlejningComponent,
    AdminLoginComponent,
    PublicComponent,
    AuthenticatedComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    MatTooltipModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
