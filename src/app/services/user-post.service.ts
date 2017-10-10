import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Post } from '../home/post';

@Injectable()
export class UserPostService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http) { }

  getPosts(): Promise<Post[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/')
      .toPromise()
      .then(response => response.json() as Post[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
