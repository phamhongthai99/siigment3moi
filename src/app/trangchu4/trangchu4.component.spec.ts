import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trangchu4Component } from './trangchu4.component';

describe('Trangchu4Component', () => {
  let component: Trangchu4Component;
  let fixture: ComponentFixture<Trangchu4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trangchu4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trangchu4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
