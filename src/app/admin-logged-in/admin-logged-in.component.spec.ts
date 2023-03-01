import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoggedInComponent } from './admin-logged-in.component';

describe('AdminLoggedInComponent', () => {
  let component: AdminLoggedInComponent;
  let fixture: ComponentFixture<AdminLoggedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLoggedInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
