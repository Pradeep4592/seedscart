import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopingCartService {

  getOrCreate(): any {
    let cartId=localStorage.getItem("cartId")
    if(!cartId){
      this.create().then(result=>{
        localStorage.setItem("cartId",result.key)
        });
    }
  }
  constructor(private db :AngularFireDatabase) { 

  }

  create(){
    return this.db.list("/shoping-carts").push({
       dateCreated:new Date().getTime()
    })

  }

}
