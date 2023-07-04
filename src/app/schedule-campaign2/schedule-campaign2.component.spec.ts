import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCampaign2Component } from './schedule-campaign2.component';

describe('ScheduleCampaign2Component', () => {
  let component: ScheduleCampaign2Component;
  let fixture: ComponentFixture<ScheduleCampaign2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleCampaign2Component]
    });
    fixture = TestBed.createComponent(ScheduleCampaign2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
