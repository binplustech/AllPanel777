import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Instantteenpatti2 } from './instantteenpatti2';

describe('Instantteenpatti2', () => {
  let component: Instantteenpatti2;
  let fixture: ComponentFixture<Instantteenpatti2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Instantteenpatti2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Instantteenpatti2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
