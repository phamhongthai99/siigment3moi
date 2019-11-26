import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadungComponent } from './dadung.component';

describe('DadungComponent', () => {
  let component: DadungComponent;
  let fixture: ComponentFixture<DadungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
