import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProofComponent } from './add-edit-proof.component';

describe('AddEditProofComponent', () => {
  let component: AddEditProofComponent;
  let fixture: ComponentFixture<AddEditProofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditProofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
