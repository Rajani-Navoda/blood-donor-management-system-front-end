import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodAvailabilityComponent } from './blood-availability.component';

describe('BloodAvailabilityComponent', () => {
  let component: BloodAvailabilityComponent;
  let fixture: ComponentFixture<BloodAvailabilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloodAvailabilityComponent]
    });
    fixture = TestBed.createComponent(BloodAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
