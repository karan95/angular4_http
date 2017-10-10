import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserRegisterService } from '../services/user-register.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  userRegisterForm: FormGroup;
  public successMsg: string;
  constructor(private formBuilder: FormBuilder, private _userRegisterService: UserRegisterService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.userRegisterForm = this.formBuilder.group({
      'username': ['', [Validators.required]],
      'job': ['', [Validators.required]]
    });
  }

  register() {
    if (this.userRegisterForm.valid) {
      this._userRegisterService.create(JSON.stringify(this.userRegisterForm.value))
        .then(res => {
          if (res.status == 201) {
            this.userRegisterForm.reset();
            this.successMsg = 'user record added successfully';
          }
        })
    }
  }
}
