import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../services/app.service';
import { CasaBox, CasaBoxType } from '../models/casa-box';

@Component({
  selector: 'app-leje-process',
  templateUrl: './leje-process.component.html',
  styleUrls: ['./leje-process.component.css']
})

export class LejeProcessComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private service: AppService
  ) { }

  public purchaseForm: FormGroup;
  public boxNummer: number;
  public loading = false;
  submitted = false;
  public casaBox: CasaBox

  ngOnInit(): void {
    this.boxNummer = -1;
    this.route.queryParams.subscribe(params => {
      this.boxNummer = params['boxNummer'];

      // Check if this number exist or is available with the API

      // If not return to the previous page or show an error

      // If success, initialize the CasaBox object
      this.casaBox = {boxNummer:this.boxNummer, type:CasaBoxType.Depotrum, m2:4,m3:6,beskrivelse:'',ledig:true,pris:250}

    });

    this.purchaseForm = this.formBuilder.group({
      fuldeNavn: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^[æøåa-zÆØÅA-Z]{2,}(?: [æøåa-zÆØÅA-Z]+){0,4}$')]],
      emailAdresse: ['', [Validators.required, Validators.minLength(6), Validators.email]],
      telefonNummer: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')]],
      adresse: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[æøåa-zÆØÅA-Z0-9.]{2,}(?: [æøåa-zÆØÅA-Z0-9.]+){0,4}$')]],
      postNummer: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('^[0-9]+$')]],
      by: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[ÆØÅæøåA-Za-z]*$')]],
      recaptchaReactive: [null, Validators.required],
      lejevilkår: [false, Validators.requiredTrue]
    });

    // this.captchaComponent.captchaEndpoint = 
    //   'https://your-app-backend-hostname.your-domain.com/simple-captcha-endpoint';
  }

  onSubmit() {
    this.submitted = true;
    if (this.purchaseForm.invalid) {
      alert("Form was invalid!")
      return;
    }
    alert("Form was valid!")
  }

  async resolved(captchaResponse: string) {
    console.log('Resolved response token: ${captchaResponse}');
    this.sendTokenToBackend(captchaResponse); //declaring the token send function with a token parameter
  }

  //function to send the token to the node server
  sendTokenToBackend(token: string) {
    //calling the service and passing the token to the service
    this.service.sendToken(token).subscribe(
      data => {
        console.log(data)
      },
      err => {
        console.log(err)
      },
      () => { }
    );
  }

}
