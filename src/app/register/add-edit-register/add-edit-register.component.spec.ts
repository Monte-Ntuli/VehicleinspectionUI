import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRegisterComponent } from './add-edit-register.component';

describe('AddEditRegisterComponent', () => {
  let component: AddEditRegisterComponent;
  let fixture: ComponentFixture<AddEditRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
