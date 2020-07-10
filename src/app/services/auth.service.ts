import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService} from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl + 'auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('topptoken', user.token);
          localStorage.setItem('toppuser', JSON.stringify(user.user));
          localStorage.setItem('topporg', model.org);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          
        }
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
