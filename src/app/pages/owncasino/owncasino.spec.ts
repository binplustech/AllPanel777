import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Owncasino } from './owncasino';

describe('Owncasino', () => {
  let component: Owncasino;
  let fixture: ComponentFixture<Owncasino>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Owncasino]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Owncasino);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
