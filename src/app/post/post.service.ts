import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient : HttpClient) { }

  public addPost(data: any){
    return this.httpClient.post(`http://localhost:8000/api/posts`, data)
  }
}
