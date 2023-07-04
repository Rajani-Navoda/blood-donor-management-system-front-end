import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignReguestsComponent } from './campaign-reguests.component';

describe('CampaignReguestsComponent', () => {
  let component: CampaignReguestsComponent;
  let fixture: ComponentFixture<CampaignReguestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampaignReguestsComponent]
    });
    fixture = TestBed.createComponent(CampaignReguestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
