import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ExtensionsService } from './utils/extensions.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KmapService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient,private extensionsService:ExtensionsService) {}
  

  getMenuItem(data:string){
    console.log('asd')
    // let model = { user_id:data,
    //               password: '0',
    //               org:'OPP'};
    let model = {};
    return this.http.post('http://localhost:5000/api/test/','');
  }

  getTest(){
    let result;
    const http = this.http.get('http://localhost:5000/api/test',{observe:"response"});

    return http.toPromise();
  }
  
}
