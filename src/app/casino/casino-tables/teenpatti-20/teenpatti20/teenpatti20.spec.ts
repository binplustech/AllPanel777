import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teenpatti20 } from './teenpatti20';

describe('Teenpatti20', () => {
  let component: Teenpatti20;
  let fixture: ComponentFixture<Teenpatti20>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Teenpatti20]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teenpatti20);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
