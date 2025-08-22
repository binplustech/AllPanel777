import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Andarbahar } from './andarbahar';

describe('Andarbahar', () => {
  let component: Andarbahar;
  let fixture: ComponentFixture<Andarbahar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Andarbahar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Andarbahar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
