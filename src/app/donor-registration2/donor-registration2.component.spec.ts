import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorRegistration2Component } from './donor-registration2.component';

describe('DonorRegistration2Component', () => {
  let component: DonorRegistration2Component;
  let fixture: ComponentFixture<DonorRegistration2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonorRegistration2Component]
    });
    fixture = TestBed.createComponent(DonorRegistration2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
