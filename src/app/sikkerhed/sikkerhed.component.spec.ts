import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SikkerhedComponent } from './sikkerhed.component';

describe('SikkerhedComponent', () => {
  let component: SikkerhedComponent;
  let fixture: ComponentFixture<SikkerhedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SikkerhedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SikkerhedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
