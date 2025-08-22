import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ab4 } from './ab4';

describe('Ab4', () => {
  let component: Ab4;
  let fixture: ComponentFixture<Ab4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ab4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ab4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
