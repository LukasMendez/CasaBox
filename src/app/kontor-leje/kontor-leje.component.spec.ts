import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontorLejeComponent } from './kontor-leje.component';

describe('KontorLejeComponent', () => {
  let component: KontorLejeComponent;
  let fixture: ComponentFixture<KontorLejeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontorLejeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontorLejeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
