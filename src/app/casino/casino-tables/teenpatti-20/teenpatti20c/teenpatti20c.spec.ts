import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teenpatti20c } from './teenpatti20c';

describe('Teenpatti20c', () => {
  let component: Teenpatti20c;
  let fixture: ComponentFixture<Teenpatti20c>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Teenpatti20c]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teenpatti20c);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
