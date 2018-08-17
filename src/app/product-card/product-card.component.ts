


import { Component, OnInit, Input } from '@angular/core';
import { ShopingCartService } from '../shoping-cart.service';
import { Product } from '../model/product';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
 

  constructor(private cartService: ShopingCartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}