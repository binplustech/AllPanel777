import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndarBaharCardLayout } from './andar-bahar-card-layout';

describe('AndarBaharCardLayout', () => {
  let component: AndarBaharCardLayout;
  let fixture: ComponentFixture<AndarBaharCardLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AndarBaharCardLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndarBaharCardLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
