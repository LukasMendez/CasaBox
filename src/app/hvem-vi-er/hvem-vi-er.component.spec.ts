import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HvemViErComponent } from './hvem-vi-er.component';

describe('HvemViErComponent', () => {
  let component: HvemViErComponent;
  let fixture: ComponentFixture<HvemViErComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HvemViErComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HvemViErComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
