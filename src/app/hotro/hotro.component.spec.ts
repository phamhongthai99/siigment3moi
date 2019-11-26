import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotroComponent } from './hotro.component';

describe('HotroComponent', () => {
  let component: HotroComponent;
  let fixture: ComponentFixture<HotroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
