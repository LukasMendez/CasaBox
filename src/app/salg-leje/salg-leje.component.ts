import { Component, OnInit } from '@angular/core';
import { CasaBox, CasaBoxType } from '../models/casa-box';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salg-leje',
  templateUrl: './salg-leje.component.html',
  styleUrls: ['./salg-leje.component.css']
})

export class SalgLejeComponent implements OnInit {

  constructor(private router: Router) { }

  public casaBoxes: Array<CasaBox>;
  public casaBoxesAvailable: Array<CasaBox>;
  public casaBoxesOccupied: Array<CasaBox>;
  public casaBoxesFiltered: Array<CasaBox>;
  public selectedDisplayOption = "Ledige";
  public selectedFilter = "Nummer - stigende"

  public displayOption: BoxDisplayOption; 
  public filterOption: BoxFilterOption;
  CasaBoxType : typeof CasaBoxType = CasaBoxType;

  ngOnInit(): void {
    this.casaBoxes = [
      {boxNummer: 1, ledig: true, m2:4, m3:10, pris:380, beskrivelse:"", type: CasaBoxType.Depotrum},
      {boxNummer: 2, ledig: false, m2:12.6, m3:31.5, pris:780, beskrivelse:"", type: CasaBoxType.Depotrum},
      {boxNummer: 3, ledig: true, m2:5.2, m3:13, pris:480, beskrivelse:"", type: CasaBoxType.Depotrum},
      {boxNummer: 4, ledig: false, m2:17, m3:51, pris:1200, beskrivelse:"", type: CasaBoxType.Depotrum},
      {boxNummer: 5, ledig: true, m2:21, m3:null, pris:550, beskrivelse:"Garage", type: CasaBoxType.Garage},
      {boxNummer: 6, ledig: true, m2:17, m3:51, pris:1200, beskrivelse:"", type: CasaBoxType.Depotrum},
      {boxNummer: 7, ledig: true, m2:5.2, m3:13, pris:480, beskrivelse:"", type: CasaBoxType.Depotrum},
      {boxNummer: 8, ledig: false, m2:7.75, m3:19.5, pris:580, beskrivelse:"", type: CasaBoxType.Depotrum},
      {boxNummer: 9, ledig: false, m2:21, m3:null, pris:550, beskrivelse:"Garage", type: CasaBoxType.Garage},
      {boxNummer: 10, ledig: true, m2:17, m3:51, pris:1200, beskrivelse:"", type: CasaBoxType.Depotrum},
      {boxNummer: 11, ledig: true, m2:9.45, m3:23.7, pris:680, beskrivelse:"", type: CasaBoxType.Depotrum},
      {boxNummer: 12, ledig: false, m2:7.75, m3:19.5, pris:580, beskrivelse:"", type: CasaBoxType.Depotrum},
    ]
  
    // Set the arrays containing available and non-available boxes
    this.casaBoxesAvailable = this.casaBoxes.filter(box => box.ledig == true);
    this.casaBoxesOccupied = this.casaBoxes.filter(box => box.ledig == false);

    // Will show this as the first option
    this.showAvailable();
    this.orderByNumberAscending();
  }

  showAvailable(){
    this.displayOption = BoxDisplayOption.Available;
    this.refreshFilter();
  }

  showOccupied(){
    this.displayOption = BoxDisplayOption.Occupied;
    this.refreshFilter();
  }

  showAll(){
    this.displayOption = BoxDisplayOption.All;
    this.refreshFilter();
  }

  orderByNumberAscending(){
    this.filterOption = BoxFilterOption.NumberAscending;

    if(this.displayOption == BoxDisplayOption.Available){
      this.casaBoxesFiltered = this.casaBoxesAvailable.sort((box1, box2) => 0 - (box1.boxNummer > box2.boxNummer ? -1 : 1))
    } 
    else if(this.displayOption == BoxDisplayOption.Occupied){
      this.casaBoxesFiltered = this.casaBoxesOccupied.sort((box1, box2) => 0 - (box1.boxNummer > box2.boxNummer ? -1 : 1))
    } else {
      this.casaBoxesFiltered = this.casaBoxes.sort((box1, box2) => 0 - (box1.boxNummer > box2.boxNummer ? -1 : 1))
    }
  }

  orderByNumberDescending(){
    this.filterOption = BoxFilterOption.NumberDescending;

    if(this.displayOption == BoxDisplayOption.Available){
      this.casaBoxesFiltered = this.casaBoxesAvailable.sort((box1, box2) => 0 - (box1.boxNummer > box2.boxNummer ? 1 : -1))
    } 
    else if(this.displayOption == BoxDisplayOption.Occupied){
      this.casaBoxesFiltered = this.casaBoxesOccupied.sort((box1, box2) => 0 - (box1.boxNummer > box2.boxNummer ? 1 : -1))
    } else {
      this.casaBoxesFiltered = this.casaBoxes.sort((box1, box2) => 0 - (box1.boxNummer > box2.boxNummer ? 1 : -1))
    }
  }

  orderByPriceAscending(){
    this.filterOption = BoxFilterOption.PriceAscending;

    if(this.displayOption == BoxDisplayOption.Available){
      this.casaBoxesFiltered = this.casaBoxesAvailable.sort((box1, box2) => 0 - (box1.pris > box2.pris ? -1 : 1))
    } 
    else if(this.displayOption == BoxDisplayOption.Occupied){
      this.casaBoxesFiltered = this.casaBoxesOccupied.sort((box1, box2) => 0 - (box1.pris > box2.pris ? -1 : 1))
    } else {
      this.casaBoxesFiltered = this.casaBoxes.sort((box1, box2) => 0 - (box1.pris > box2.pris ? -1 : 1))
    }
  }

  orderByPriceDescending(){
    this.filterOption = BoxFilterOption.PriceDescending;

    if(this.displayOption == BoxDisplayOption.Available){
      this.casaBoxesFiltered = this.casaBoxesAvailable.sort((box1, box2) => 0 - (box1.pris > box2.pris ? 1 : -1))
    } 
    else if(this.displayOption == BoxDisplayOption.Occupied){
      this.casaBoxesFiltered = this.casaBoxesOccupied.sort((box1, box2) => 0 - (box1.pris > box2.pris ? 1 : -1))
    } else {
      this.casaBoxesFiltered = this.casaBoxes.sort((box1, box2) => 0 - (box1.pris > box2.pris ? 1 : -1))
    }
  }

  orderBySizeAscending(){
    this.filterOption = BoxFilterOption.SizeAscending;

    if(this.displayOption == BoxDisplayOption.Available){
      this.casaBoxesFiltered = this.casaBoxesAvailable.sort((box1, box2) => 0 - (box1.m2 > box2.m2 ? -1 : 1))
    } 
    else if(this.displayOption == BoxDisplayOption.Occupied){
      this.casaBoxesFiltered = this.casaBoxesOccupied.sort((box1, box2) => 0 - (box1.m2 > box2.m2 ? -1 : 1))
    } else {
      this.casaBoxesFiltered = this.casaBoxes.sort((box1, box2) => 0 - (box1.m2 > box2.m2 ? -1 : 1))
    }
  }

  orderBySizeDescending(){
    this.filterOption = BoxFilterOption.SizeDescending;

    if(this.displayOption == BoxDisplayOption.Available){
      this.casaBoxesFiltered = this.casaBoxesAvailable.sort((box1, box2) => 0 - (box1.m2 > box2.m2 ? 1 : -1))
    } 
    else if(this.displayOption == BoxDisplayOption.Occupied){
      this.casaBoxesFiltered = this.casaBoxesOccupied.sort((box1, box2) => 0 - (box1.m2 > box2.m2 ? 1 : -1))
    } else {
      this.casaBoxesFiltered = this.casaBoxes.sort((box1, box2) => 0 - (box1.m2 > box2.m2 ? 1 : -1))
    }
  }

  refreshFilter(){
    if(this.filterOption == undefined){
      return;
    }
    switch(this.filterOption){
      case BoxFilterOption.NumberAscending:{
        this.orderByNumberAscending();
        break;
      }
      case BoxFilterOption.NumberDescending:{
        this.orderByNumberDescending();
        break;
      }
      case BoxFilterOption.PriceAscending:{
        this.orderByPriceAscending();
        break;
      }
      case BoxFilterOption.PriceDescending:{
        this.orderByPriceDescending();
        break;
      }
      case BoxFilterOption.SizeAscending:{
        this.orderBySizeAscending();
        break;
      }
      case BoxFilterOption.SizeDescending:{
        this.orderBySizeDescending();
        break;
      }
    }
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

enum BoxDisplayOption{
  All,
  Available,
  Occupied
}

enum BoxFilterOption{
  NumberAscending,
  NumberDescending,
  PriceAscending,
  PriceDescending,
  SizeAscending,
  SizeDescending
}
