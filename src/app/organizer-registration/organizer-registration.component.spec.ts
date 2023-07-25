import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerRegistrationComponent } from './organizer-registration.component';

describe('OrganizerRegistrationComponent', () => {
  let component: OrganizerRegistrationComponent;
  let fixture: ComponentFixture<OrganizerRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizerRegistrationComponent]
    });
    fixture = TestBed.createComponent(OrganizerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
