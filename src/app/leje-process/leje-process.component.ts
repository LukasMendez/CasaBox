import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../services/app.service';
import { CasaBox, CasaBoxType } from '../models/casa-box';
import { CasaboxService } from '../services/casabox.service';
import { CasaBoxVariantDto } from '../models/casa-box-variant-dto';

@Component({
  selector: 'app-leje-process',
  templateUrl: './leje-process.component.html',
  styleUrls: ['./leje-process.component.css']
})

export class LejeProcessComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private appService: AppService,
    private casaBoxService: CasaboxService,
    private router: Router
  ) { }

  public purchaseForm: FormGroup;
  // CasaBox
  public m2: number;
  public m3: number;
  public type: string;
  public pris: number;

  public available: Boolean; // <<-- TODO see if we need these last five variables

  public casaBoxVariantDto : CasaBoxVariantDto;

  public loading = false;
  submitted = false;
  public casaBox: CasaBox

  ngOnInit(): void {
    this.casaBoxService.GetSelectedCasaBoxVariant().subscribe(
      data => {
        this.casaBoxVariantDto = data; 
      },
      error => {
        this.router.navigate(['/hjem']);
        console.log(error);
      }
    )
    if(this.casaBoxVariantDto == undefined){
      this.router.navigate(['/hjem']);
    }

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
    this.appService.sendToken(token).subscribe(
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
