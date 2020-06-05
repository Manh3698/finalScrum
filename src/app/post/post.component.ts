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
  id;
  addPostForm = new FormGroup ({
    title : new FormControl(''),
    description : new FormControl(''),
    image : new FormControl(''),
    content : new FormControl(''),
    user_id : new FormControl('1')
  });
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    // this.postService.getUser(name).subscribe((data : any)=>{
    //   console.log(name);
    // })
    this.id = localStorage.getItem('id');
    console.log(this.id);
    
  }
  onSubmit(){
    this.postService.addPost(this.addPostForm.value).subscribe(
      (data: any) => {
        //if (data && data.status === 200){
          console.log(this.addPostForm.value);         
        //}
      })
      
  };
  

}
