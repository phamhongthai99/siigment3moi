import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cauhoi8Component } from './cauhoi8.component';

describe('Cauhoi8Component', () => {
  let component: Cauhoi8Component;
  let fixture: ComponentFixture<Cauhoi8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cauhoi8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cauhoi8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
