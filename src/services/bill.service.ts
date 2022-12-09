import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  url = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }

  generateReport(data:any){
    return this.httpClient.post(this.url+"/bill/genereteReport",data,{
      headers:new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  getPDF(data:any):Observable<Blob>{
    return this.httpClient.post(this.url+"/bill/getPdf", data,{responseType:'blob'});
  }
}
