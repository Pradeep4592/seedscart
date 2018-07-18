import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product$;
  products;
  categories;
  constructor(produceService : ProductService, categorySer:CategoryService) {
   
    this.product$= produceService.getAll().valueChanges().subscribe(products=>{
    this.products=products;
    });


    categorySer.getAll().valueChanges().subscribe(categories=>{
    this.categories=categories;
    });

   }

  ngOnInit() {
  }

}
