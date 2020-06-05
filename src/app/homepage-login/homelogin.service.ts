import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeLoginService {

  constructor(private httpClient: HttpClient) { }
  public listMovie(){
    return this.httpClient.get('http://192.168.43.79:8000/api/posts');
  }
}
