import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySecondTrailHeadComponent } from './my-second-trail-head.component';

describe('MySecondTrailHeadComponent', () => {
  let component: MySecondTrailHeadComponent;
  let fixture: ComponentFixture<MySecondTrailHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySecondTrailHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySecondTrailHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
