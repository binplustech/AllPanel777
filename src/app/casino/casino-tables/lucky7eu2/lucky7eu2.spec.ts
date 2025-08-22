import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lucky7eu2 } from './lucky7eu2';

describe('Lucky7eu2', () => {
  let component: Lucky7eu2;
  let fixture: ComponentFixture<Lucky7eu2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lucky7eu2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lucky7eu2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
