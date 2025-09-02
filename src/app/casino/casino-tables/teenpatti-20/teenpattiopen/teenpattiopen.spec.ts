import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teenpattiopen } from './teenpattiopen';

describe('Teenpattiopen', () => {
  let component: Teenpattiopen;
  let fixture: ComponentFixture<Teenpattiopen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Teenpattiopen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teenpattiopen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
