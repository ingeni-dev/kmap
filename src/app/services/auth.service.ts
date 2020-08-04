import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // baseUrl = environment.apiUrl + 'auth/';
  baseUrl = 'http://portal.kimpai.com/portal/service/login.ashx';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) { }

  login(model: any) {
    const payload = new HttpParams()
      .set('user', model.userId)
      .set('pwd', model.pass);

    return this.http.post(this.baseUrl, payload).pipe(
      map((response: any) => {
        if (response && response[0].FLAG === 'T') {
          localStorage.setItem('userId', model.userId);
        }

        return response;
        // if (user) {
        //   localStorage.setItem('topptoken', user.token);
        //   localStorage.setItem('toppuser', JSON.stringify(user.user));
        //   localStorage.setItem('topporg', model.org);
        //   this.decodedToken = this.jwtHelper.decodeToken(user.token);

        // }
      })
    );
  }



  loggedIn() {
    const token = localStorage.getItem('topptoken');
    if (this.jwtHelper.isTokenExpired(token)) {
      this.logOut();
      return false;
    }
    return true;
  }

  logOut() {
    localStorage.removeItem('topptoken');
    localStorage.removeItem('toppuser');
    localStorage.removeItem('topporg');
    localStorage.removeItem('mattypeList');
    localStorage.removeItem('custList');
  }


}
