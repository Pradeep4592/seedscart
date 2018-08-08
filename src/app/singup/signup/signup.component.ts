import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../model/user';
import { Router } from '../../../../node_modules/@angular/router';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { SignupSuccessComponent } from '../../dilog/signup-success/signup-success.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
userSer1 : UserService;
isAvalableUserName :User;
  constructor(userSer :UserService,private router:Router,private dialog:MatDialog) { 
    this.userSer1=userSer;
  }
  form=new FormGroup(
    {
      username:new FormControl('',Validators.required),
      password :new FormControl('',Validators.required),
      confirm_password:new FormControl('',Validators.required),
      first_name:new FormControl('',Validators.required),
      last_name :new FormControl('',Validators.required),
      mobile:new FormControl('',Validators.required)
 
    })

    get username()
    {
      return this.form.get('username');
    }
    get password()
    {
      return this.form.get('password');
    }
    get firstName()
    {
      return this.form.get('first_name');
    }
    get lastName()
    {
      return this.form.get('last_name');
    }
    get mobNo()
    {
      return this.form.get('mobile');
    }
    get confirmPassword()
    {
      return this.form.get('confirm_password');
    }
    onRightClick(event){

      alert("right click disabled")
      event.stopPropagation();
      return false
    }
  ngOnInit() {
  }

isAvalableUser(){
  
  if(this.username.value!=""){
  this.userSer1.isAvalableUserName(this.username.value).take(1).subscribe(userNmae=>{
    this.isAvalableUserName=userNmae;

  });
console.log("inside signup")
console.log(this.isAvalableUserName)
}
}
signUp(f:User){
  this.userSer1.createUser(f)
  
 this.dialog.open(SignupSuccessComponent).afterClosed().subscribe(result=>{
   if(result=="login"){
    this.router.navigate(['/login'])
   }else{
    this.router.navigate(['/'])
   }
 });

  //s
}
}
