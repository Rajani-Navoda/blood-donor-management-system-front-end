import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDonationComponent } from './add-new-donation.component';

describe('AddNewDonationComponent', () => {
  let component: AddNewDonationComponent;
  let fixture: ComponentFixture<AddNewDonationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewDonationComponent]
    });
    fixture = TestBed.createComponent(AddNewDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
