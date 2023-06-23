import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorprofilesettingsComponent } from './donorprofilesettings.component';

describe('DonorprofilesettingsComponent', () => {
  let component: DonorprofilesettingsComponent;
  let fixture: ComponentFixture<DonorprofilesettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonorprofilesettingsComponent]
    });
    fixture = TestBed.createComponent(DonorprofilesettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
