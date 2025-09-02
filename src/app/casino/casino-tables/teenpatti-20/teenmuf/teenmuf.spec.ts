import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teenmuf } from './teenmuf';

describe('Teenmuf', () => {
  let component: Teenmuf;
  let fixture: ComponentFixture<Teenmuf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Teenmuf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teenmuf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
