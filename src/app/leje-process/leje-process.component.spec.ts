import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LejeProcessComponent } from './leje-process.component';

describe('LejeProcessComponent', () => {
  let component: LejeProcessComponent;
  let fixture: ComponentFixture<LejeProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LejeProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LejeProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
