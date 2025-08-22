import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokert20 } from './pokert20';

describe('Pokert20', () => {
  let component: Pokert20;
  let fixture: ComponentFixture<Pokert20>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pokert20]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pokert20);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
