import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cauhoi5Component } from './cauhoi5.component';

describe('Cauhoi5Component', () => {
  let component: Cauhoi5Component;
  let fixture: ComponentFixture<Cauhoi5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cauhoi5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cauhoi5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
