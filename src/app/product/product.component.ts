import { ShopingCartService } from './../shoping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../category.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from './service/product.service';
import { Product } from '../model/product';

import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit ,OnDestroy {

  item: any;
  products;
  categories;
  category;
  carsFlag=true;
  cart: any;
  subscription:Subscription;
  
  constructor(productService : ProductService, categorySer:CategoryService,rout:ActivatedRoute,private cartser:ShopingCartService) {
   
   let product$= productService.getAll().valueChanges().subscribe(products=>{
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
this.cartser.addToCart(product);




}
colapseCarousel(){
  this.carsFlag=false;

}


  async ngOnInit() {

  this.subscription=(await this.cartser.getCart()).valueChanges().subscribe(cart=>{
    
    this.cart=cart
 
  });
  }


  ngOnDestroy(){
this.subscription.unsubscribe();

  }

  
 

  
}

 

    
  

