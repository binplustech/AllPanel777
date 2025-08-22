import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dragontigert202 } from './dragontigert202';

describe('Dragontigert202', () => {
  let component: Dragontigert202;
  let fixture: ComponentFixture<Dragontigert202>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dragontigert202]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dragontigert202);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
