import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
product:Product
  constructor(private router :ActivatedRoute) {
   

    this.router.queryParams.subscribe((params :Product) => {
      this.product=params;
      console.log(params);
    });
   }




  ngOnInit() {
  
  }

}
