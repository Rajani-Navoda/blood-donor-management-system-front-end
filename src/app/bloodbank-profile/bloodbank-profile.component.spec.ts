import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodbankProfileComponent } from './bloodbank-profile.component';

describe('BloodbankProfileComponent', () => {
  let component: BloodbankProfileComponent;
  let fixture: ComponentFixture<BloodbankProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloodbankProfileComponent]
    });
    fixture = TestBed.createComponent(BloodbankProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
