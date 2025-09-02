import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Instantteenpatti } from './instantteenpatti';

describe('Instantteenpatti', () => {
  let component: Instantteenpatti;
  let fixture: ComponentFixture<Instantteenpatti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Instantteenpatti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Instantteenpatti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
