import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalgLejeComponent } from './salg-leje.component';

describe('SalgLejeComponent', () => {
  let component: SalgLejeComponent;
  let fixture: ComponentFixture<SalgLejeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalgLejeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalgLejeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
