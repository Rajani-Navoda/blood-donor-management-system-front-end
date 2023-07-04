import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartconditionComponent } from './heartcondition.component';

describe('HeartconditionComponent', () => {
  let component: HeartconditionComponent;
  let fixture: ComponentFixture<HeartconditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeartconditionComponent]
    });
    fixture = TestBed.createComponent(HeartconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
