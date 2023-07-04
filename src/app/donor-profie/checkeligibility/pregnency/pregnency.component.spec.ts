import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregnencyComponent } from './pregnency.component';

describe('PregnencyComponent', () => {
  let component: PregnencyComponent;
  let fixture: ComponentFixture<PregnencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PregnencyComponent]
    });
    fixture = TestBed.createComponent(PregnencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
