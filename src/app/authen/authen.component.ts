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
  LoginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  })
  constructor(private authenService : AuthenService) { }

  ngOnInit(): void {
  }
  onSubmit(){
  this.authenService.checkUser(this.LoginForm.value).subscribe((data : any)=>{
    
    console.log("ff"+data.user[0].id);
    //localStorage.setItem('name',data.name);
    localStorage.setItem('id',data.user[0].id);
    localStorage.setItem('name',data.user[0].name);
  })
  }
}