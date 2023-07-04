import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantdonateComponent } from './cantdonate.component';

describe('CantdonateComponent', () => {
  let component: CantdonateComponent;
  let fixture: ComponentFixture<CantdonateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CantdonateComponent]
    });
    fixture = TestBed.createComponent(CantdonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
