import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teenpatti2 } from './teenpatti2';

describe('Teenpatti2', () => {
  let component: Teenpatti2;
  let fixture: ComponentFixture<Teenpatti2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Teenpatti2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teenpatti2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
