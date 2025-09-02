import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baccarat2 } from './baccarat2';

describe('Baccarat2', () => {
  let component: Baccarat2;
  let fixture: ComponentFixture<Baccarat2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Baccarat2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Baccarat2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
