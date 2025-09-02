import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teenpatti2cards } from './teenpatti2cards';

describe('Teenpatti2cards', () => {
  let component: Teenpatti2cards;
  let fixture: ComponentFixture<Teenpatti2cards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Teenpatti2cards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teenpatti2cards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
