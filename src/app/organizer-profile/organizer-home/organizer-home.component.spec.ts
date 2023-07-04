import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerHomeComponent } from './organizer-home.component';

describe('OrganizerHomeComponent', () => {
  let component: OrganizerHomeComponent;
  let fixture: ComponentFixture<OrganizerHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizerHomeComponent]
    });
    fixture = TestBed.createComponent(OrganizerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
