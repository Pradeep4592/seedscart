import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators}from '@angular/forms'
@Component({
  selector: 'bootstrap-navbar',
  templateUrl: './bootstrap-navbar.component.html',
  styleUrls: ['./bootstrap-navbar.component.css']
})
export class BootstrapNavbarComponent implements OnInit {

  mouseControl:boolean;
  searchForm=new FormGroup(
    {
      search:new FormControl('',Validators.required),
     
 
    }
  );
  logerUsername :string;
  constructor() {
this.logerUsername=localStorage.getItem("logedinUser");
    console.log("bootstrap component"+localStorage.getItem("logedinUser"))
   }



  ngOnInit() {
  }
  isShown=true;
onclick(){


 
}
mouseEnter(div : string){
 this.mouseControl=true;
}

mouseLeave(div : string){
  this.mouseControl=false;
}
}
