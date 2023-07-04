import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerNotificationsComponent } from './organizer-notifications.component';

describe('OrganizerNotificationsComponent', () => {
  let component: OrganizerNotificationsComponent;
  let fixture: ComponentFixture<OrganizerNotificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizerNotificationsComponent]
    });
    fixture = TestBed.createComponent(OrganizerNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
