import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTrailHeadComponent } from './dashboard-trail-head.component';

describe('DashboardTrailHeadComponent', () => {
  let component: BookTrailHeadComponent;
  let fixture: ComponentFixture<BookTrailHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookTrailHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookTrailHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
