import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodbankprofileHeaderComponent } from './bloodbankprofile-header.component';

describe('BloodbankprofileHeaderComponent', () => {
  let component: BloodbankprofileHeaderComponent;
  let fixture: ComponentFixture<BloodbankprofileHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloodbankprofileHeaderComponent]
    });
    fixture = TestBed.createComponent(BloodbankprofileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
