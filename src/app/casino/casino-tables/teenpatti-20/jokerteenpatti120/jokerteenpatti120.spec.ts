import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jokerteenpatti120 } from './jokerteenpatti120';

describe('Jokerteenpatti120', () => {
  let component: Jokerteenpatti120;
  let fixture: ComponentFixture<Jokerteenpatti120>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Jokerteenpatti120]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jokerteenpatti120);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
