import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneRoulette } from './one-roulette';

describe('OneRoulette', () => {
  let component: OneRoulette;
  let fixture: ComponentFixture<OneRoulette>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OneRoulette]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneRoulette);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
