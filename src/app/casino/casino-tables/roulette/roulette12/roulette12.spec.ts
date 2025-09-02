import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Roulette12 } from './roulette12';

describe('Roulette12', () => {
  let component: Roulette12;
  let fixture: ComponentFixture<Roulette12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Roulette12]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Roulette12);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
