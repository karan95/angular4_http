import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams, RequestMethod } from '@angular/http';

@Injectable()
export class UserRegisterService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers, withCredentials: false });
  constructor(private http: Http) { }

  create(userData) {
    return this.http
      .post('https://reqres.in/api/users', userData, this.options)
      .toPromise()
      .then(res => {
        if (res.status == 201) {
          return res;
        }
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
