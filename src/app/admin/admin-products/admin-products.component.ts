import { AngularFireObject } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/service/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
product$ : any[];
  products$ ;
  constructor(produceService : ProductService) {
   
    this.products$= produceService.getAll().valueChanges().subscribe(res=>
      {
        this.product$=res;
    
      });;
 
  }
  ngOnInit() {
  }

}
