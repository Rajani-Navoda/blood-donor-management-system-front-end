import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodbankDonationcampaignsComponent } from './bloodbank-donationcampaigns.component';

describe('BloodbankDonationcampaignsComponent', () => {
  let component: BloodbankDonationcampaignsComponent;
  let fixture: ComponentFixture<BloodbankDonationcampaignsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloodbankDonationcampaignsComponent]
    });
    fixture = TestBed.createComponent(BloodbankDonationcampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
