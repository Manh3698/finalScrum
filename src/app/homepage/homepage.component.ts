import { Component, OnInit } from '@angular/core';
import { HomeService} from './home.service'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  title = 'simple-review-angular';
  listMovie;
  getUser;
  id;
  constructor(private homeService : HomeService,private httpClient:HttpClient) { }
  ngOnInit(): void {
    this.id = localStorage.getItem('name');
    console.log(this.id);
    this.homeService.listMovie().subscribe((data : any) => {
      this.listMovie = data;
      console.log(data);
    })
    // this.homeService.getUser(name).subscribe((data)=>{
    //   if(data && data.status===200){
    //     console.log(name);
    //   }
    // })
    
  }
  
}
export interface UserInterface {
  id: number
  name : string
  email: string
  password: string
  
}
