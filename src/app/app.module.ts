import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
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
    KontaktComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
