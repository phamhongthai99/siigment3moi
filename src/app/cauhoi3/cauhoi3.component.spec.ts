import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cauhoi3Component } from './cauhoi3.component';

describe('Cauhoi3Component', () => {
  let component: Cauhoi3Component;
  let fixture: ComponentFixture<Cauhoi3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cauhoi3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cauhoi3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
