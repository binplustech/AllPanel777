import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lucky7eu } from './lucky7eu';

describe('Lucky7eu', () => {
  let component: Lucky7eu;
  let fixture: ComponentFixture<Lucky7eu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lucky7eu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lucky7eu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
