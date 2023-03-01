import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyFirstTrailHeadComponent } from './HomePage/my-first-trail-head.component';
import { HomeNavBarComponent } from './home-nav-bar/home-nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MySecondTrailHeadComponent } from './Profile Page/my-second-trail-head.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { BookTrailHeadComponent } from './BookDesk/dashboard-trail-head.component';
import { WishlistTrailHeadComponent } from './AboutUs/wishlist-trail-head.component';
import { AboutusTrailHeadComponent } from './aboutus-trail-head/aboutus-trail-head.component';
import { AppLoginModuleComponent } from './Authentication/app-login-module/app-login-module.component';
import { AppSignUpModuleComponent } from './Authentication/app-sign-up-module/app-sign-up-module.component';
import { UserLoggedInComponent } from './user-logged-in/user-logged-in.component';
import { AdminLoggedInComponent } from './admin-logged-in/admin-logged-in.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstTrailHeadComponent,
    HomeNavBarComponent,
    MySecondTrailHeadComponent,
    BookTrailHeadComponent,
    WishlistTrailHeadComponent,
    AboutusTrailHeadComponent,
    AppLoginModuleComponent,
    AppSignUpModuleComponent,
    UserLoggedInComponent,
    AdminLoggedInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
