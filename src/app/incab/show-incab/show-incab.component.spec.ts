import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIncabComponent } from './show-incab.component';

describe('ShowIncabComponent', () => {
  let component: ShowIncabComponent;
  let fixture: ComponentFixture<ShowIncabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowIncabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowIncabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
