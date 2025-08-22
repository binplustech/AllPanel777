import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lucky15 } from './lucky15';

describe('Lucky15', () => {
  let component: Lucky15;
  let fixture: ComponentFixture<Lucky15>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lucky15]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lucky15);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
