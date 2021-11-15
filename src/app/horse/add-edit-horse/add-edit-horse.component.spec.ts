import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditHorseComponent } from './add-edit-horse.component';

describe('AddEditHorseComponent', () => {
  let component: AddEditHorseComponent;
  let fixture: ComponentFixture<AddEditHorseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditHorseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditHorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
