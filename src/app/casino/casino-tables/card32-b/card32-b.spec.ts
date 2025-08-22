import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card32B } from './card32-b';

describe('Card32B', () => {
  let component: Card32B;
  let fixture: ComponentFixture<Card32B>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Card32B]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card32B);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
