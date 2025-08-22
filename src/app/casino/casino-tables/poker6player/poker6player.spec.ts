import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Poker6player } from './poker6player';

describe('Poker6player', () => {
  let component: Poker6player;
  let fixture: ComponentFixture<Poker6player>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Poker6player]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Poker6player);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
