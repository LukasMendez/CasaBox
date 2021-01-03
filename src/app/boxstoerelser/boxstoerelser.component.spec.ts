import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxstoerelserComponent } from './boxstoerelser.component';

describe('BoxstoerelserComponent', () => {
  let component: BoxstoerelserComponent;
  let fixture: ComponentFixture<BoxstoerelserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxstoerelserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxstoerelserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
