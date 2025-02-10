import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetshopComponent } from './sweetshop.component';

describe('SweetshopComponent', () => {
  let component: SweetshopComponent;
  let fixture: ComponentFixture<SweetshopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SweetshopComponent]
    });
    fixture = TestBed.createComponent(SweetshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
