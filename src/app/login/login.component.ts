import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators}from '@angular/forms'
import { UserService } from '../user.service';

import { AngularFireList } from 'angularfire2/database';
import { LoginService } from './login.service';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BootstrapNavbarComponent } from '../bootstrap-navbar/bootstrap-navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

 
})


export class LoginComponent implements OnInit {
 
  navBar:BootstrapNavbarComponent ;
 logedUserName :string;
 users:User;
 usersObs :Observable<User>;
  form=new FormGroup(
   {
     username:new FormControl('',Validators.required),
     password :new FormControl('',Validators.required)

   }
 );
 loginService :LoginService;
  constructor(loginService:LoginService ,private router:Router,navBar:BootstrapNavbarComponent ) { 
  this.loginService=loginService;
  }
  get username()
  {
    return this.form.get('username');
  }
  get password()
  {
    return this.form.get('password');
  }
  ngOnInit() {
    
  }

  login(){
   console.log("inside login method ");

   this.usersObs=this.loginService.validateuser(this.username.value,this.password.value)
   this.usersObs.subscribe(users=>{

     console.log("inside subscribe method "+users);
    this.setLogedUserName(users.first_name);
    if(users !=null){
     if(users.password==this.password.value  ){
      console.log("login success");
      
    localStorage.setItem("logedinUser",this.logedUserName);
    
    
    window.location.reload();
    this.router.navigate(['/'])
    
    }else{

      this.form.setErrors({
        invalidLogin:true
        
        });
    }
  }
  else{

    this.form.setErrors({
      invalidLogin:true
      
      });
  }
   }

   );
    
   

  }
 
setLogedUserName(uname:string){

  this.logedUserName=uname;
  console.log("logedUserName "+this.logedUserName);
}

  }
