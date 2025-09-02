import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baccarat } from './baccarat';

describe('Baccarat', () => {
  let component: Baccarat;
  let fixture: ComponentFixture<Baccarat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Baccarat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Baccarat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
