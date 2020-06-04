import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RankService {

  constructor(private httpClient: HttpClient) { }

  public listMovie(){
    return this.httpClient.get('http://localhost:8000/api/ranks');
  }
}

export class movieModel{
  title: string;
  description: string
  content: string
  image: string
  count_view: number
  user_id: number
}