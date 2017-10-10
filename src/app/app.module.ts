import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';

import { UserPostService } from './services/user-post.service';
import { UserRegisterService } from './services/user-register.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
