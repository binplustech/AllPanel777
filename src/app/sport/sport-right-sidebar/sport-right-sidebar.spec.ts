import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportRightSidebar } from './sport-right-sidebar';

describe('SportRightSidebar', () => {
  let component: SportRightSidebar;
  let fixture: ComponentFixture<SportRightSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportRightSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportRightSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
