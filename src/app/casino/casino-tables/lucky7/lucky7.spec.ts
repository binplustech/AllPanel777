import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lucky7 } from './lucky7';

describe('Lucky7', () => {
  let component: Lucky7;
  let fixture: ComponentFixture<Lucky7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lucky7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lucky7);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
