import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Router} from '@angular/router'
import {APIService, UserService} from "../shared";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService extends APIService {

  constructor(http:Http, private user:UserService, private router:Router) {
    super(http);
  }

  /** handle login and route authentication here **/
  logout(callback) {
    callback();
  }

}
