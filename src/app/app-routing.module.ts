import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusTrailHeadComponent } from './aboutus-trail-head/aboutus-trail-head.component';
import { AppLoginModuleComponent } from './Authentication/app-login-module/app-login-module.component';
import { BookTrailHeadComponent } from './BookDesk/dashboard-trail-head.component';
import { MyFirstTrailHeadComponent } from './HomePage/my-first-trail-head.component';
import { WishlistTrailHeadComponent } from './AboutUs/wishlist-trail-head.component';
import { UserLoggedInComponent } from './user-logged-in/user-logged-in.component';
import { AdminLoggedInComponent } from './admin-logged-in/admin-logged-in.component';
import { AppSignUpModuleComponent } from './Authentication/app-sign-up-module/app-sign-up-module.component';

const routes: Routes = [
  {path: '',component: MyFirstTrailHeadComponent},
  {path: 'home',component: MyFirstTrailHeadComponent},
  { path: 'book', component: BookTrailHeadComponent},
  { path: 'login', component:AppLoginModuleComponent},
  { path: 'signup', component: AppSignUpModuleComponent},
  { path: 'dashboard', component:BookTrailHeadComponent},
  { path: 'favorite', component: WishlistTrailHeadComponent},
  { path : 'about', component: AboutusTrailHeadComponent},
  { path: 'userLogin', component:UserLoggedInComponent},
  { path: 'adminLogin', component: AdminLoggedInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
