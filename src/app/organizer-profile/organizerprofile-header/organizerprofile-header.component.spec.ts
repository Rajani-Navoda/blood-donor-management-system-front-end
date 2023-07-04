import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerprofileHeaderComponent } from './organizerprofile-header.component';

describe('OrganizerprofileHeaderComponent', () => {
  let component: OrganizerprofileHeaderComponent;
  let fixture: ComponentFixture<OrganizerprofileHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizerprofileHeaderComponent]
    });
    fixture = TestBed.createComponent(OrganizerprofileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
