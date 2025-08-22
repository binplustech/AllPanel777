import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lucky5 } from './lucky5';

describe('Lucky5', () => {
  let component: Lucky5;
  let fixture: ComponentFixture<Lucky5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lucky5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lucky5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
