import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorcardComponent } from './donorcard.component';

describe('DonorcardComponent', () => {
  let component: DonorcardComponent;
  let fixture: ComponentFixture<DonorcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonorcardComponent]
    });
    fixture = TestBed.createComponent(DonorcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
