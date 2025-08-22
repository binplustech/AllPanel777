import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokeroneday } from './pokeroneday';

describe('Pokeroneday', () => {
  let component: Pokeroneday;
  let fixture: ComponentFixture<Pokeroneday>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pokeroneday]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pokeroneday);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
