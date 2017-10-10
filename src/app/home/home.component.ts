import { Component, OnInit } from '@angular/core';
import { UserPostService } from '../services/user-post.service';

import { Post } from './post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userPosts: Post[] = [];
  constructor(private _userPostService: UserPostService) { }

  ngOnInit() {
    this._userPostService.getPosts()
      .then(posts => {
        this.userPosts = posts
      });
  }

  loaduserPosts() {

  }

}
