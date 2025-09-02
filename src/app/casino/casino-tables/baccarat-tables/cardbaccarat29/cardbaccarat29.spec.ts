import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardbaccarat29 } from './cardbaccarat29';

describe('Cardbaccarat29', () => {
  let component: Cardbaccarat29;
  let fixture: ComponentFixture<Cardbaccarat29>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cardbaccarat29]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cardbaccarat29);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
