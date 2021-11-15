import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncabComponent } from './incab.component';

describe('IncabComponent', () => {
  let component: IncabComponent;
  let fixture: ComponentFixture<IncabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
