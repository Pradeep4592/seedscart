import { Product } from './model/product';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/take'; 

@Injectable({
  providedIn: 'root'
})
export class ShopingCartService {
  
 
item:any

  constructor(private db :AngularFireDatabase) { 

  }
  async getCart()  {
    let cartId= await this.getOrCreateId();
    return this.db.object("/shopping-carts/"+cartId)
  }

 private async getOrCreateId():Promise<string> {
    let cartId=localStorage.getItem("cartId")
    if(cartId) return cartId;
    
     let result = await this.create()
     localStorage.setItem("cartId",result.key)
     return result.key;
    
   
  }
  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

private getShopingCart(cartId:string){
  return this.db.object("/shoping-carts/"+cartId)
}

 private create(){
    return this.db.list("/shoping-carts").push({
       dateCreated:new Date().getTime()
    })

  }

async addToCart(product :Product){
let cartId= await this.getOrCreateId()


let item$=this.getItem(cartId,product.key)

item$.valueChanges().take(1).subscribe(item =>{
 this.item=item;
if(this.item){
  let quantity=this.item.quantity;
  item$.set({product:product,quantity:quantity+1})
 
}else{
  item$.set({product:product,quantity:1})
  console.log("item not exist");
}


})

}

async removeFromCart(product: Product) {
  let cartId= await this.getOrCreateId()


let item$=this.getItem(cartId,product.key)

item$.valueChanges().take(1).subscribe(item =>{
 this.item=item;
if(this.item){
  let quantity=this.item.quantity;
  item$.set({product:product,quantity:quantity-1})
 
}else{
  item$.set({product:product,quantity:1})
  console.log("item not exist");
}


})

 
}
}
