import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sweetshop1Component } from './sweetshop1.component';

describe('Sweetshop1Component', () => {
  let component: Sweetshop1Component;
  let fixture: ComponentFixture<Sweetshop1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sweetshop1Component]
    });
    fixture = TestBed.createComponent(Sweetshop1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
