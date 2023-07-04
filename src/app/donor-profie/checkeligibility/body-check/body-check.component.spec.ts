import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCheckComponent } from './body-check.component';

describe('BodyCheckComponent', () => {
  let component: BodyCheckComponent;
  let fixture: ComponentFixture<BodyCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyCheckComponent]
    });
    fixture = TestBed.createComponent(BodyCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
