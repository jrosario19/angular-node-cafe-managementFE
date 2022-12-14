import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  signup(data: any) {
    return this.httpClient.post(this.url + '/user/signup', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  forgotPassword(data:any){
    return this.httpClient.post(this.url+'/user/forgotPassword', data,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  login(data:any){
    return this.httpClient.post(this.url+'/user/login', data,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  checkTolen():Observable<any>{
    return this.httpClient.get(this.url + "/user/checktoken");
  }

  changePassword(data:any){
    return this.httpClient.post(this.url+'/user/changePassword', data,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  getUsers(){
    return this.httpClient.get(this.url+"/user/get");
  }

  update(data:any){
    return this.httpClient.patch(this.url+"/user/update", data, {
      headers:new HttpHeaders().set("Content-Type", "application/json")
    })
  }
}
