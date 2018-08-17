import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../product/service/product.service';

@Component({
  selector: 'app-billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.css']
})
export class BillingFormComponent implements OnInit {
  product$;
  products;
  constructor(produceService : ProductService) {
    this.product$= produceService.getAll().valueChanges().subscribe(products=>{
      this.products=products})

   }
  billing_form=new FormGroup(
    {
      product_name:new FormControl('',Validators.required),
      
 
    })


  ngOnInit() {
  }

}
