import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditIncabComponent } from './add-edit-incab.component';

describe('AddEditIncabComponent', () => {
  let component: AddEditIncabComponent;
  let fixture: ComponentFixture<AddEditIncabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditIncabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditIncabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
