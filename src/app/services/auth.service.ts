import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // baseUrl = environment.apiUrl + 'auth/';
  baseUrl = 'https://localhost:5001/users/login';
  // baseUrl = 'http://portal.kimpai.com/portal/service/login.ashx';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient, private router: Router,
    private toastrService: ToastrService) { }

  login(model: any) {
    // const payload = new HttpParams()
    //   .set('user', model.userId)
    //   .set('pwd', model.pass);

    const payload = {
      username : model.userId,
      password: model.pass
    }

    debugger;
    this.http.post(this.baseUrl, payload).subscribe(response => {
      if (response && response['token']) {
        localStorage.setItem('userId', response['emP_ID']);
        localStorage.setItem('userName', response['emP_NAME']);
        localStorage.setItem('email', response['email']);
        localStorage.setItem('nickname', response['nickname']);
        localStorage.setItem('orgId', response['orG_ID']);
        localStorage.setItem('posRole', response['poS_ROLE']);
        localStorage.setItem('token', response['token']);
        this.toastrService.success('เข้าสู่ระบบเรียบร้อย');
        this.router.navigate(['/layout']);
      }else{
        this.toastrService.error('เข้าสู่ระบบไม่ถูกต้อง');
        this.router.navigate(['/login']);
      }
    });
  }

 getCurrentUser() {
   return localStorage.getItem('userId');
 }             

  loggedIn() {
    const token = localStorage.getItem('token');
    if (this.jwtHelper.isTokenExpired(token)) {
      this.logOut();
      return false;
    }
    return true;
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('org');
    localStorage.removeItem('mattypeList');
    localStorage.removeItem('custList');
  }




}
