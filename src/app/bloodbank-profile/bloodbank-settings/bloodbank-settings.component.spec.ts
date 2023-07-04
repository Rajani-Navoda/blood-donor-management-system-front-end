import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodbankSettingsComponent } from './bloodbank-settings.component';

describe('BloodbankSettingsComponent', () => {
  let component: BloodbankSettingsComponent;
  let fixture: ComponentFixture<BloodbankSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloodbankSettingsComponent]
    });
    fixture = TestBed.createComponent(BloodbankSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
