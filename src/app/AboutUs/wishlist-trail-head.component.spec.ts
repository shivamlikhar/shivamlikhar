import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistTrailHeadComponent } from './wishlist-trail-head.component';

describe('WishlistTrailHeadComponent', () => {
  let component: WishlistTrailHeadComponent;
  let fixture: ComponentFixture<WishlistTrailHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistTrailHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishlistTrailHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
