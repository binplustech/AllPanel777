import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teenpattitext } from './teenpattitext';

describe('Teenpattitext', () => {
  let component: Teenpattitext;
  let fixture: ComponentFixture<Teenpattitext>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Teenpattitext]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teenpattitext);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
