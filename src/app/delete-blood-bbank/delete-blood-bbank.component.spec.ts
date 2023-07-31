import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBloodBBankComponent } from './delete-blood-bbank.component';

describe('DeleteBloodBBankComponent', () => {
  let component: DeleteBloodBBankComponent;
  let fixture: ComponentFixture<DeleteBloodBBankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteBloodBBankComponent]
    });
    fixture = TestBed.createComponent(DeleteBloodBBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
