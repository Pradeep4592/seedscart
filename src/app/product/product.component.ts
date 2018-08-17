import { ShopingCartService } from './../shoping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product.service';
import { Product } from '../model/product';
import { createAttribute } from '@angular/compiler/src/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  item: any;
  products;
  categories;
  category;
  
  constructor(produceService : ProductService, categorySer:CategoryService,rout:ActivatedRoute,private cart:ShopingCartService) {
   
   let product$= produceService.getAll().valueChanges().subscribe(products=>{
    this.products=products;
   
  rout.queryParamMap.subscribe(param=>{

  this.category=param.get('category');
 

})
  
 
  });


    categorySer.getAll().valueChanges().subscribe(categories=>{
    this.categories=categories;
    });

   }


addToCart(product:Product){
console.log(product)
this.cart.addToCart(product);




}
  ngOnInit() {

  }
  

  
 

  
}

 

    
  

