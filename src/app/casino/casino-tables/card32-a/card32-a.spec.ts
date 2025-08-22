import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card32A } from './card32-a';

describe('Card32A', () => {
  let component: Card32A;
  let fixture: ComponentFixture<Card32A>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Card32A]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card32A);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
