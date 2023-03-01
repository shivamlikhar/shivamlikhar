import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusTrailHeadComponent } from './aboutus-trail-head.component';

describe('AboutusTrailHeadComponent', () => {
  let component: AboutusTrailHeadComponent;
  let fixture: ComponentFixture<AboutusTrailHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusTrailHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutusTrailHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
