import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactOrganizerComponent } from './contact-organizer.component';

describe('ContactOrganizerComponent', () => {
  let component: ContactOrganizerComponent;
  let fixture: ComponentFixture<ContactOrganizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactOrganizerComponent]
    });
    fixture = TestBed.createComponent(ContactOrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
