import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cauhoi4Component } from './cauhoi4.component';

describe('Cauhoi4Component', () => {
  let component: Cauhoi4Component;
  let fixture: ComponentFixture<Cauhoi4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cauhoi4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cauhoi4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
