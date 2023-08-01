import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodBankListComponent } from './blood-bank-list.component';

describe('BloodBankListComponent', () => {
  let component: BloodBankListComponent;
  let fixture: ComponentFixture<BloodBankListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloodBankListComponent]
    });
    fixture = TestBed.createComponent(BloodBankListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
