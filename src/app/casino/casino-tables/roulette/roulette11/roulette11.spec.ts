import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Roulette11 } from './roulette11';

describe('Roulette11', () => {
  let component: Roulette11;
  let fixture: ComponentFixture<Roulette11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Roulette11]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Roulette11);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
