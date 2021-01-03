import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HjemComponent } from './hjem/hjem.component';
import { OpbevaringComponent } from './opbevaring/opbevaring.component';
import { BoxstoerelserComponent } from './boxstoerelser/boxstoerelser.component';
import { SikkerhedComponent } from './sikkerhed/sikkerhed.component';
import { HvemViErComponent } from './hvem-vi-er/hvem-vi-er.component';
import { SalgLejeComponent } from './salg-leje/salg-leje.component';
import { KontorLejeComponent } from './kontor-leje/kontor-leje.component';
import { KontaktComponent } from './kontakt/kontakt.component';


const routes: Routes = [
  { path: 'hjem',        component: HjemComponent },
  { path: '',   redirectTo: '/hjem', pathMatch: 'full' },
  { path: 'opbevaring',       component: OpbevaringComponent },
  { path: 'box-stoerelser',        component: BoxstoerelserComponent },
  { path: 'sikkerhed',        component: SikkerhedComponent },
  { path: 'hvem-er-casabox',        component: HvemViErComponent },
  { path: 'salg-leje',        component: SalgLejeComponent },
  { path: 'lej-et-kontor',        component: KontorLejeComponent },
  { path: 'kontakt',        component: KontaktComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
