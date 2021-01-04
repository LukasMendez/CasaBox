import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-leje-process',
  templateUrl: './leje-process.component.html',
  styleUrls: ['./leje-process.component.css']
})

export class LejeProcessComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }
  
  public purchaseForm: FormGroup;
  public boxNummer: number;
  public loading = false;
  submitted = false;

  ngOnInit(): void {
    this.boxNummer = -1;
    this.route.queryParams.subscribe(params => {
      this.boxNummer = params['boxNummer'];

      // Check if this number exist or is available with the API

      // If not return to the previous page or show an error

    });

    this.purchaseForm = this.formBuilder.group({
      fuldeNavn: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^[æøåa-zÆØÅA-Z]{2,}(?: [æøåa-zÆØÅA-Z]+){0,4}$')]],
      emailAdresse: ['', [Validators.required, Validators.minLength(6), Validators.email]],
      telefonNummer: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')]],
      adresse: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[æøåa-zÆØÅA-Z0-9.]{2,}(?: [æøåa-zÆØÅA-Z0-9.]+){0,4}$')]],
      postNummer: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('^[0-9]+$')]],
      by: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[ÆØÅæøåA-Za-z]*$')]]
    });
  }

  onSubmit(){
    this.submitted = true;

  }

}
