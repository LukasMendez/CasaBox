import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-udlejning',
  templateUrl: './udlejning.component.html',
  styleUrls: ['./udlejning.component.css']
})
export class UdlejningComponent implements OnInit {

  constructor(private router: Router) { }

  public boxSize
  ngOnInit(): void {
  }

  purchase(boxNummer: number){
    this.router.navigate(['/online-booking'], {
      queryParams: {
        boxNummer: boxNummer
      },
      queryParamsHandling: 'merge',
    });
  }


}
