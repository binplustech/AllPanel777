import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teenpattioneday } from './teenpattioneday';

describe('Teenpattioneday', () => {
  let component: Teenpattioneday;
  let fixture: ComponentFixture<Teenpattioneday>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Teenpattioneday]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teenpattioneday);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
