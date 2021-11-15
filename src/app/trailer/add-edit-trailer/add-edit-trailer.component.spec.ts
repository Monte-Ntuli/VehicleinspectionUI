import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTrailerComponent } from './add-edit-trailer.component';

describe('AddEditTrailerComponent', () => {
  let component: AddEditTrailerComponent;
  let fixture: ComponentFixture<AddEditTrailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTrailerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
