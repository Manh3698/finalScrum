import { AuthenService } from './authen.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-authen',
  templateUrl: './authen.component.html',
  styleUrls: ['./authen.component.css']
})
export class AuthenComponent implements OnInit {
  checkUser;
  Login = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  })
  constructor(private authenService : AuthenService) { }

  ngOnInit(): void {
  }
  onSubmit(){
  this.authenService.checkUser(this.Login.value).subscribe((data : any)=>{
    
    console.log(data);
    localStorage.setItem('',data.name);
    
  })
  }
}