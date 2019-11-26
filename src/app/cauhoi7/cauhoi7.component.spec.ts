import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cauhoi7Component } from './cauhoi7.component';

describe('Cauhoi7Component', () => {
  let component: Cauhoi7Component;
  let fixture: ComponentFixture<Cauhoi7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cauhoi7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cauhoi7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
