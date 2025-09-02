import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jokerteenpatti1 } from './jokerteenpatti1';

describe('Jokerteenpatti1', () => {
  let component: Jokerteenpatti1;
  let fixture: ComponentFixture<Jokerteenpatti1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Jokerteenpatti1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jokerteenpatti1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
