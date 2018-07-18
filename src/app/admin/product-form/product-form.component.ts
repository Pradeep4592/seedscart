import { ProductService } from './../../product/service/product.service';
import { AngularFireList } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take'; 
import { CategoryService } from '../../category.service';
import { Observable } from 'rxjs';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$ :AngularFireList<any>;
  categoriesObs:Observable<any[]>
  product  = {
    "category": "",
"imageUrl": "",
"price":"",
"title":"",
"key":""
  }; 
  categoriesList: any[];
  id;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private categoryService: CategoryService ,
    private productService :ProductService
  ) {


    
    this.categories$ = categoryService.getAll();
    this.categoriesObs=this.categories$.valueChanges();
     this.categoriesObs.subscribe(res=>{
    this.categoriesList=res; 
   })
   
   
    this.id = this.route.snapshot.paramMap.get('Id');
     if(this.id) productService.getById(this.id).take(1).subscribe(product=>{
     this.product=product;
    })


  }

 save(f :any){
if(this.id){
  this.productService.update(this.id,f);
}else{
this.productService.create({
"category": f.category,
"imageUrl": f.imageUrl,
"price": f.price,
"title": f.title,
"key":f.title
});
}
  this.router.navigate(['/manageProduct'])



 };
  ngOnInit() {
  }

}
