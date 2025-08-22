import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dragontigerliont20 } from './dragontigerliont20';

describe('Dragontigerliont20', () => {
  let component: Dragontigerliont20;
  let fixture: ComponentFixture<Dragontigerliont20>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dragontigerliont20]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dragontigerliont20);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
