import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetInfoService {
 private url: any = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: Http) {
  }

  private extractValue(res: Response) {
    let body = res.json();

    body.forEach((elem) => { //add property: 'status";
      elem.status = 'user';
    });

    return body;
  }

  getValue() {
    return this.http.get(this.url).map(this.extractValue);
  }

  saveUsersArr(data) {
    this.refreshUserArr(data);
  }

  getUserData(id) {
    let userArr = this.getUserArr();
    let userInComponent;

    userArr.forEach((elem) => {
      elem.id == id ? userInComponent = elem : id;
    });

    return userInComponent;
  }

  saveUserChanges(user, id) {
   let userArr = this.getUserArr();
   let newUserArr = userArr.map((elem) => {
      if (elem.id == id) {
        return user;
      } else {
        return elem;
      }
    });

    this.refreshUserArr(newUserArr);
  }

  deleteUser(id) {
    let userArr = this.getUserArr();
    let indexUser;

    userArr.forEach((elem, index) => {
      elem.id == id ? indexUser = index : index;
    });

    userArr.splice(indexUser, 1);

    this.refreshUserArr(userArr);
  }

  getMaxUserId() {
    let userArr = this.getUserArr();
    let maxId = 0;

    userArr.forEach((elem) => {
      elem.id > maxId ? maxId = elem.id : elem;
    });

    return maxId;
  }

  addNewUser(user) {
    let userArr = this.getUserArr();
    userArr.push(user);

    this.refreshUserArr(userArr);
  }

  refreshUserArr(userArr) {
    let serializeUserArr = JSON.stringify(userArr);
    localStorage.setItem('localArr', serializeUserArr);
  }

  getUserArr() {
    let userArrInStorage = localStorage.getItem('localArr');
    let parseUserArr = JSON.parse(userArrInStorage);

    return parseUserArr;
  }
}
