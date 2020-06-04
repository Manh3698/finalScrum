import { Component, OnInit } from '@angular/core';
import { RankService } from './rank.service';

@Component({
  selector: 'app-movie-rank',
  templateUrl: './movie-rank.component.html',
  styleUrls: ['./movie-rank.component.css']
})
export class MovieRankComponent implements OnInit {
  listMovie;
  constructor(private rankService : RankService) { }
  ngOnInit(): void {
    this.rankService.listMovie().subscribe((data : any) => {
      this.listMovie = data;
      console.log(data);
    })
  }
}