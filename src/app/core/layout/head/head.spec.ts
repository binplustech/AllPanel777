import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Head } from './head';

describe('Head', () => {
  let component: Head;
  let fixture: ComponentFixture<Head>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Head]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Head);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
