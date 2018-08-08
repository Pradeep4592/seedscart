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


isAvalableUserName(username :string){
  
if(username!=""){
 
return this.getUserByUserName(username);
}
}

  getAllUsers(){
    

  }

  getUserByUserName(username :string) {
    this.users = this.dbs.object('users/'+username);
   
    this.userObservable = this.users.valueChanges();  
  
   return this.userObservable ;
  }

  createUser(form:User){
    if(form.username != "")
    this.dbs.object('/users/'+form.username).set(form)
  }
}
