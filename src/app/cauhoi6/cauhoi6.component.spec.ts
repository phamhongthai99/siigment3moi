import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cauhoi6Component } from './cauhoi6.component';

describe('Cauhoi6Component', () => {
  let component: Cauhoi6Component;
  let fixture: ComponentFixture<Cauhoi6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cauhoi6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cauhoi6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
