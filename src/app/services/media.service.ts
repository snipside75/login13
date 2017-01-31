import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class MediaService {

  private url: string ='http://media.mw.metropolia.fi/wbma';
  private user : any = {};

  constructor(private http : Http) { }

  setUser = (user) => {
    this.user=user;
    console.log(this.user);
  };

  login = () => {
    return this.http.post(this.url+'/login', this.user)
      .subscribe(
        resp=> {
          console.log(resp.json());
          //localStorage.getItem("user", JSON.stringify(this.user));
        },
        error => {
          console.log(error);
        }
      );
    };
    register = () => {
    return this.http.post(this.url+'/users', this.user)
      .subscribe(
        resp => {
          console.log(resp.json());
        },
        error => {
          console.log(error);
        }
      )
    }


}
