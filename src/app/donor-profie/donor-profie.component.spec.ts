import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorProfieComponent } from './donor-profie.component';

describe('DonorProfieComponent', () => {
  let component: DonorProfieComponent;
  let fixture: ComponentFixture<DonorProfieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonorProfieComponent]
    });
    fixture = TestBed.createComponent(DonorProfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
