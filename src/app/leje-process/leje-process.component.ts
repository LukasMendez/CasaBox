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
  submitted = false;

  ngOnInit(): void {
    this.boxNummer = -1;
    this.route.queryParams.subscribe(params => {
      this.boxNummer = params['boxNummer'];
    });

    this.purchaseForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^([A-Z][a-z]*((\\s[A-Za-z])?[a-z]*)*)$')]],
      username: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      isTeamLeader: [''],
      team: ['', [Validators.minLength(6)]]
    });
  }

  onSubmit(){

  }

}
