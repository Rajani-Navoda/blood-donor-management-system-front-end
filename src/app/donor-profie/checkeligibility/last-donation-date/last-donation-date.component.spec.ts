import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastDonationDateComponent } from './last-donation-date.component';

describe('LastDonationDateComponent', () => {
  let component: LastDonationDateComponent;
  let fixture: ComponentFixture<LastDonationDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastDonationDateComponent]
    });
    fixture = TestBed.createComponent(LastDonationDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
