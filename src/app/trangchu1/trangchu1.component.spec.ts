import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trangchu1Component } from './trangchu1.component';

describe('Trangchu1Component', () => {
  let component: Trangchu1Component;
  let fixture: ComponentFixture<Trangchu1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trangchu1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trangchu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
