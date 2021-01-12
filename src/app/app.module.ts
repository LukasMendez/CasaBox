import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http'; 

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
    UdlejningComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
