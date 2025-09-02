import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Instantteenpatti3 } from './instantteenpatti3';

describe('Instantteenpatti3', () => {
  let component: Instantteenpatti3;
  let fixture: ComponentFixture<Instantteenpatti3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Instantteenpatti3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Instantteenpatti3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
