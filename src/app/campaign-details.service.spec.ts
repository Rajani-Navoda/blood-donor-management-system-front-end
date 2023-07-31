import { TestBed } from '@angular/core/testing';

import { CampaignDetailsService } from './campaign-details.service';

describe('CampaignDetailsService', () => {
  let service: CampaignDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
