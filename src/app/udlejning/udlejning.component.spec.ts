import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdlejningComponent } from './udlejning.component';

describe('UdlejningComponent', () => {
  let component: UdlejningComponent;
  let fixture: ComponentFixture<UdlejningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdlejningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdlejningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
