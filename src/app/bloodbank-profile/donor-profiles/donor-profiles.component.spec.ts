import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorProfilesComponent } from './donor-profiles.component';

describe('DonorProfilesComponent', () => {
  let component: DonorProfilesComponent;
  let fixture: ComponentFixture<DonorProfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonorProfilesComponent]
    });
    fixture = TestBed.createComponent(DonorProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
