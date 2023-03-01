import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLoginModuleComponent } from './app-login-module.component';

describe('AppLoginModuleComponent', () => {
  let component: AppLoginModuleComponent;
  let fixture: ComponentFixture<AppLoginModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLoginModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLoginModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
