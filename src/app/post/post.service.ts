import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient : HttpClient) { }

  public addPost(data: any){
    return this.httpClient.post(`http://192.168.43.79:8000/api/posts`, data)
  }
  

}
// export interface UserInterface {
//   id: number
//   name : string
//   email: string
//   password: string
  
// }