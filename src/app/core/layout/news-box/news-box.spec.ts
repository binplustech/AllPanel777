import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBox } from './news-box';

describe('NewsBox', () => {
  let component: NewsBox;
  let fixture: ComponentFixture<NewsBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
