import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Roulette13 } from './roulette13';

describe('Roulette13', () => {
  let component: Roulette13;
  let fixture: ComponentFixture<Roulette13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Roulette13]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Roulette13);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
