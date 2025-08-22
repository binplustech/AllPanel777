import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ab3 } from './ab3';

describe('Ab3', () => {
  let component: Ab3;
  let fixture: ComponentFixture<Ab3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ab3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ab3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
