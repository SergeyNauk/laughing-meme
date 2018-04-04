import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetInfoService {
  url: any = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: Http) {
  }
  private extractValue(res: Response) {
    let body = res.json();
    return body;
  }
  getValue() {
    return this.http.get(this.url).map(this.extractValue);
  }
}
