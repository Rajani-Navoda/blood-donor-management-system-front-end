import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorprofileHomeComponent } from './donorprofile-home.component';

describe('DonorprofileHomeComponent', () => {
  let component: DonorprofileHomeComponent;
  let fixture: ComponentFixture<DonorprofileHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonorprofileHomeComponent]
    });
    fixture = TestBed.createComponent(DonorprofileHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
