import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.css']
})
export class BillingFormComponent implements OnInit {

  constructor() { }
  billing_form=new FormGroup(
    {
      product_name:new FormControl('',Validators.required),
      
 
    })


  ngOnInit() {
  }

}
