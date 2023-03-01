import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {
  username!: any;
  password!: any;
  canActivate(): boolean {
    this.username = sessionStorage.getItem("username");
    this.password = sessionStorage.getItem("password");
    console.log("success");
    if (this.username == "user" && this.password == "user") {

      return true;
    }

    return false;
  }
  
}
