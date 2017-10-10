import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from '../home/home.component';
import { FeedComponent } from '../feed/feed.component';

import { UserPostService } from '../services/user-post.service';
import { UserRegisterService } from '../services/user-register.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'feeds',
    component: FeedComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [],
  exports: [
    RouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserRegisterService]
})
export class AppRoutingModule { }
