import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dragontigeroneday } from './dragontigeroneday';

describe('Dragontigeroneday', () => {
  let component: Dragontigeroneday;
  let fixture: ComponentFixture<Dragontigeroneday>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dragontigeroneday]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dragontigeroneday);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
