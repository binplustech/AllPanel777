import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teenpatti41 } from './teenpatti41';

describe('Teenpatti41', () => {
  let component: Teenpatti41;
  let fixture: ComponentFixture<Teenpatti41>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Teenpatti41]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teenpatti41);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
