


import { Component, OnInit, Input } from '@angular/core';
import { ShopingCartService } from '../shoping-cart.service';
import { Product } from '../model/product';
import { Router, NavigationExtras } from '../../../node_modules/@angular/router';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input("shoping-cart")shopingCart;
 

  constructor(private cartService: ShopingCartService,private route:Router) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
  removeFromCart(){
    this.cartService.removeFromCart(this.product)
  }

  getQuantity(){
    if(!this.shopingCart) return 0;
    let item=this.shopingCart.items[this.product.key];
   return item ? item.quantity :0;
  }

  onClickImage(product:Product){
    let navigationExtras: NavigationExtras = {
      queryParams: {
            "category":product.category,    
            "title" : product.title,
            "price":product.price,
            "imageUrl":product.imageUrl,
            "key" :product.key,
            "$key" : product.key,
           }
      
  };
  this.route.navigate(["/productDetails"], navigationExtras);
   
    
  }
}