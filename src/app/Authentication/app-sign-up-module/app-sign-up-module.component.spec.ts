import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSignUpModuleComponent } from './app-sign-up-module.component';

describe('AppSignUpModuleComponent', () => {
  let component: AppSignUpModuleComponent;
  let fixture: ComponentFixture<AppSignUpModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSignUpModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSignUpModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
