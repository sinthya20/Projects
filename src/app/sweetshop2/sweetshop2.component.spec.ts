import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sweetshop2Component } from './sweetshop2.component';

describe('Sweetshop2Component', () => {
  let component: Sweetshop2Component;
  let fixture: ComponentFixture<Sweetshop2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sweetshop2Component]
    });
    fixture = TestBed.createComponent(Sweetshop2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
