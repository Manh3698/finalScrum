import { Component, OnInit } from '@angular/core';
import {AppService} from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'simple-review-angular';
  listMovie;
  constructor(private appService : AppService) { }
  ngOnInit(): void {
    this.appService.listMovie().subscribe((data : any) => {
      this.listMovie = data;
      console.log(data);
    })
  }
}
