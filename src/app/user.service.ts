import { Component,Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { User } from './model/user';


@Injectable()
export class UserService {
  dbs: AngularFireDatabase;
  users: AngularFireObject<User>;

  userObservable:Observable<User>;

  constructor(db: AngularFireDatabase) {
    this.dbs=db;
  }




  getAllUsers(){
    

  }

  getUserByUserName(username :string) {
    this.users = this.dbs.object('users/'+username);
   
    this.userObservable = this.users.valueChanges();  
  
   return this.userObservable ;
  }

  createUser(){
    this.dbs.list('users').push({"name":"pk1"})
  }
}
