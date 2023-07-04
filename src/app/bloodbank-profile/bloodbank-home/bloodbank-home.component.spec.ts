import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodbankHomeComponent } from './bloodbank-home.component';

describe('BloodbankHomeComponent', () => {
  let component: BloodbankHomeComponent;
  let fixture: ComponentFixture<BloodbankHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloodbankHomeComponent]
    });
    fixture = TestBed.createComponent(BloodbankHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
