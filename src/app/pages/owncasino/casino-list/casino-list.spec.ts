import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoList } from './casino-list';

describe('CasinoList', () => {
  let component: CasinoList;
  let fixture: ComponentFixture<CasinoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CasinoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasinoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
