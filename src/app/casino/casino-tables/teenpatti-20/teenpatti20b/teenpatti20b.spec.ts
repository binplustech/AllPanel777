import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teenpatti20b } from './teenpatti20b';

describe('Teenpatti20b', () => {
  let component: Teenpatti20b;
  let fixture: ComponentFixture<Teenpatti20b>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Teenpatti20b]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teenpatti20b);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
