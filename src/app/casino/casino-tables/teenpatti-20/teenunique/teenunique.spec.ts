import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teenunique } from './teenunique';

describe('Teenunique', () => {
  let component: Teenunique;
  let fixture: ComponentFixture<Teenunique>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Teenunique]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teenunique);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
