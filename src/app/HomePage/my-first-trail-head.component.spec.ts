import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstTrailHeadComponent } from './my-first-trail-head.component';

describe('MyFirstTrailHeadComponent', () => {
  let component: MyFirstTrailHeadComponent;
  let fixture: ComponentFixture<MyFirstTrailHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFirstTrailHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFirstTrailHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
