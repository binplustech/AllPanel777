import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Andarbahar2 } from './andarbahar2';

describe('Andarbahar2', () => {
  let component: Andarbahar2;
  let fixture: ComponentFixture<Andarbahar2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Andarbahar2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Andarbahar2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
