import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdComponent } from './cold.component';

describe('ColdComponent', () => {
  let component: ColdComponent;
  let fixture: ComponentFixture<ColdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColdComponent]
    });
    fixture = TestBed.createComponent(ColdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
