import { Component } from '@angular/core';
import { AdminGuardGuard } from '../Auth/admin-guard.guard';


@Component({
  selector: 'app-home-nav-bar',
  templateUrl: './home-nav-bar.component.html',
  styleUrls: ['./home-nav-bar.component.scss']
})
export class HomeNavBarComponent {
  opened = false;
  user!: boolean;
  admin!:boolean;

  constructor(private authgaurd:AdminGuardGuard) {

  }
 ngOnInit(): void {
   this.admin=this.authgaurd.canActivate();

 }
}
