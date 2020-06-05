import { Component, OnInit } from '@angular/core';
import { HomeLoginService} from './homelogin.service'


@Component({
  selector: 'app-homepage-login',
  templateUrl: './homepage-login.component.html',
  styleUrls: ['./homepage-login.component.css']
})
export class HomepageLoginComponent implements OnInit {
  title = 'simple-review-angular';
  listMovie;
  constructor(private homeLoginService : HomeLoginService) { }
  ngOnInit(): void {
    this.homeLoginService.listMovie().subscribe((data : any) => {
      this.listMovie = data;
      console.log(data);
    })
  }
}
