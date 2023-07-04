import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBloodBankComponent } from './create-blood-bank.component';

describe('CreateBloodBankComponent', () => {
  let component: CreateBloodBankComponent;
  let fixture: ComponentFixture<CreateBloodBankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBloodBankComponent]
    });
    fixture = TestBed.createComponent(CreateBloodBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
