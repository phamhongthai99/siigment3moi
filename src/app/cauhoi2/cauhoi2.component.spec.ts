import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cauhoi2Component } from './cauhoi2.component';

describe('Cauhoi2Component', () => {
  let component: Cauhoi2Component;
  let fixture: ComponentFixture<Cauhoi2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cauhoi2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cauhoi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
