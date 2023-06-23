import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdonorprofileComponent } from './editdonorprofile.component';

describe('EditdonorprofileComponent', () => {
  let component: EditdonorprofileComponent;
  let fixture: ComponentFixture<EditdonorprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditdonorprofileComponent]
    });
    fixture = TestBed.createComponent(EditdonorprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
