import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorprofileHeaderComponent } from './donorprofile-header.component';

describe('DonorprofileHeaderComponent', () => {
  let component: DonorprofileHeaderComponent;
  let fixture: ComponentFixture<DonorprofileHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonorprofileHeaderComponent]
    });
    fixture = TestBed.createComponent(DonorprofileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
