import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CasaboxService } from '../services/casabox.service';

@Component({
  selector: 'app-udlejning',
  templateUrl: './udlejning.component.html',
  styleUrls: ['./udlejning.component.css']
})
export class UdlejningComponent implements OnInit {

  constructor(
    private router: Router,
    private casaBoxService: CasaboxService
  ) { }

  ngOnInit(): void {
  }

  purchase(m2: number, m3: number, type: string) {

    // Check if this number exist or is available with the API
    this.casaBoxService.GetCasaBoxVariant(m2, m3, type).subscribe(
      data => {
        if (data) {
          this.casaBoxService.SetSelectedCasaBoxVariant(data);
          this.router.navigate(['/online-booking']);
          return;
        }
      },
      err => {
        alert("Der er opstået en fejl. Det kan være fordi der ikke er flere depotrum/garager ledige. Kontakt venligst udlejer for mere information");
        console.log(err);
      }
    )
  }


}
