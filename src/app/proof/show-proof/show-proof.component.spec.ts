import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProofComponent } from './show-proof.component';

describe('ShowProofComponent', () => {
  let component: ShowProofComponent;
  let fixture: ComponentFixture<ShowProofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
