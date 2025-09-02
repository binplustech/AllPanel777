import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teenpatti42 } from './teenpatti42';

describe('Teenpatti42', () => {
  let component: Teenpatti42;
  let fixture: ComponentFixture<Teenpatti42>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Teenpatti42]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teenpatti42);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
