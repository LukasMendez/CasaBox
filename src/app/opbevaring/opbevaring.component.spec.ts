import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpbevaringComponent } from './opbevaring.component';

describe('OpbevaringComponent', () => {
  let component: OpbevaringComponent;
  let fixture: ComponentFixture<OpbevaringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpbevaringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpbevaringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
