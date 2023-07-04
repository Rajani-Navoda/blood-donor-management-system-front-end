import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendRemindersOrganizerComponent } from './send-reminders-organizer.component';

describe('SendRemindersOrganizerComponent', () => {
  let component: SendRemindersOrganizerComponent;
  let fixture: ComponentFixture<SendRemindersOrganizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendRemindersOrganizerComponent]
    });
    fixture = TestBed.createComponent(SendRemindersOrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
