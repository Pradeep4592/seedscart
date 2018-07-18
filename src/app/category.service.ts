import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable, Query } from '@angular/core';


@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) {

  
   }

  getAll() { 
    return this.db.list('/categories',ref => ref.orderByChild('name'));
  }
}
