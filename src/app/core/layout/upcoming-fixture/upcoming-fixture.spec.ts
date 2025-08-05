import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingFixture } from './upcoming-fixture';

describe('UpcomingFixture', () => {
  let component: UpcomingFixture;
  let fixture: ComponentFixture<UpcomingFixture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpcomingFixture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingFixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
