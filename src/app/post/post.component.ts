import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  getUser;
  addPost;
  addPostForm = new FormGroup ({
    title : new FormControl(''),
    description : new FormControl(''),
    image : new FormControl(''),
    content : new FormControl(''),
    name : new FormControl('')
  });
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getUser(name).subscribe((data : any)=>{
      console.log(name);
    })
  }
  onSubmit(){
    this.postService.addPost(this.addPostForm.value).subscribe(
      (data: any) => {
        if (data && data.status === 200){
          console.log(this.addPostForm.value);         
        }
      })
  }

}
