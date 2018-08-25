
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Product } from '../../model/product';


@Injectable()
export class ProductService {
  db:AngularFireDatabase;
 
  object :AngularFireObject<Product>
  constructor( db:AngularFireDatabase) { 

    this.db=db;
  }
  array:any[];

create(product){
let key=product.title;

this.db.object('/products/'+key).set(product);

}

getAll(){
  return this.db.list('/products')
}

getById(id :string){
  this.object= this.db.object('/products/'+id);
  return this.object.valueChanges();
}
update(id:any,product:any){
return this.db.object('/products/'+id).update(product);
}

}
