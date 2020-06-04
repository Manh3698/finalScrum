import { Component, OnInit } from '@angular/core';
import { DetailService} from './detail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  detailPost;
  constructor(private detailService: DetailService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.detailService.getPostById(id).subscribe((data: any) =>{
      this.detailPost = data;
    });
  }

}
