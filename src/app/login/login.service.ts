import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  userService:UserService;
  userObservable:Observable<User>;
  constructor(userService:UserService) {
    this.userService=userService
   }
isUserNameAvalable(username :string){}

public 
validateuser(username :string , password :string ){
this.userObservable=this.userService.getUserByUserName(username);
 
return this.userObservable;
}

}
