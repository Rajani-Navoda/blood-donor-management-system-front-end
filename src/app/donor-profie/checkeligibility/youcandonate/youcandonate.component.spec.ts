import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoucandonateComponent } from './youcandonate.component';

describe('YoucandonateComponent', () => {
  let component: YoucandonateComponent;
  let fixture: ComponentFixture<YoucandonateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoucandonateComponent]
    });
    fixture = TestBed.createComponent(YoucandonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
