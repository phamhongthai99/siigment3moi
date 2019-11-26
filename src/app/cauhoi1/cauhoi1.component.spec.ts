import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cauhoi1Component } from './cauhoi1.component';

describe('Cauhoi1Component', () => {
  let component: Cauhoi1Component;
  let fixture: ComponentFixture<Cauhoi1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cauhoi1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cauhoi1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
