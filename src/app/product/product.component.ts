import { ActivatedRoute } from '@angular/router';
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
  category;
  constructor(produceService : ProductService, categorySer:CategoryService,rout:ActivatedRoute) {
   
    this.product$= produceService.getAll().valueChanges().subscribe(products=>{
    this.products=products;
   
  rout.queryParamMap.subscribe(param=>{

  this.category=param.get('category');
  })
  
  });


    categorySer.getAll().valueChanges().subscribe(categories=>{
    this.categories=categories;
    });

   }

  ngOnInit() {

  }

}
