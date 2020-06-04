import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private httpClient : HttpClient) { }

  public checkUser(data : any) {
    return this.httpClient.post('http://localhost:8000/api/auth/login',data);
  }
}