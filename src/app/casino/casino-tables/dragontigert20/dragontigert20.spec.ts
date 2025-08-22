import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dragontigert20 } from './dragontigert20';

describe('Dragontigert20', () => {
  let component: Dragontigert20;
  let fixture: ComponentFixture<Dragontigert20>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dragontigert20]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dragontigert20);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
