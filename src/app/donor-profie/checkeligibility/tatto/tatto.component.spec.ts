import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattoComponent } from './tatto.component';

describe('TattoComponent', () => {
  let component: TattoComponent;
  let fixture: ComponentFixture<TattoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TattoComponent]
    });
    fixture = TestBed.createComponent(TattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
