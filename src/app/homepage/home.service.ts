import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }
  public listMovie(){
    return this.httpClient.get('http://192.168.43.79:8000/api/posts');
  }
  // getUser(data:any): Observable<any> {
  //   return this.httpClient.post<any>('http://localhost:8000/api/auth/login', data );
  // }
}
