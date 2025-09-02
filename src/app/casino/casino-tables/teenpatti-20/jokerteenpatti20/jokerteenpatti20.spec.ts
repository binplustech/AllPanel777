import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jokerteenpatti20 } from './jokerteenpatti20';

describe('Jokerteenpatti20', () => {
  let component: Jokerteenpatti20;
  let fixture: ComponentFixture<Jokerteenpatti20>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Jokerteenpatti20]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jokerteenpatti20);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
