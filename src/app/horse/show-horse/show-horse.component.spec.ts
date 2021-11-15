import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHorseComponent } from './show-horse.component';

describe('ShowHorseComponent', () => {
  let component: ShowHorseComponent;
  let fixture: ComponentFixture<ShowHorseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowHorseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
