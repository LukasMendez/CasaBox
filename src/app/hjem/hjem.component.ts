import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-hjem',
  templateUrl: './hjem.component.html',
  styleUrls: ['./hjem.component.css']
})
export class HjemComponent implements OnInit {

  constructor() { }

  public innerWidth: any;
  ngOnInit() {
      this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
  this.innerWidth = event.target.innerWidth;
  console.log("Width: " + event.target.innerWidth);
  if(innerWidth < 1040){
    
  }
}

}
