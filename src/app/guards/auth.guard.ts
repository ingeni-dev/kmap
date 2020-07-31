import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router:Router, private toastrService:ToastrService){}
  
  canActivate(): boolean {
    return true;
    if (this.authService.loggedIn()) {
      return true;
    }

   // this.toastrService.error('กรุณา Login ก่อนใช้งานระบบ');
    this.router.navigate(['/login']);
    return false;
  }
  
}
