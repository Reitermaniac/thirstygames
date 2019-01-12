import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FlexLayoutModule} from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule} from './app.routing.module';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CreateUserComponent } from './create-user/create-user.component';
import {environment} from '../environments/environment';
import {BaseUrlInterceptor} from './Utilites/base-urlinterceptor';
import {AccessTokenInterceptor} from './Utilites/accessToken-interceptor';
import { UsersComponent } from './users/users.component';
import { AdminWelcomePageComponent } from './admin-welcome-page/admin-welcome-page.component';
import { BarkeeperWelcomePageComponent } from './barkeeper-welcome-page/barkeeper-welcome-page.component';
import { BeverageComponent } from './beverage/beverage.component';
import { TeamComponent } from './team/team.component';
import { IndexComponent } from './index/index.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ScoreComponent } from './score/score.component';

import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    UsersComponent,
    AdminWelcomePageComponent,
    BarkeeperWelcomePageComponent,
    BeverageComponent,
    TeamComponent,
    IndexComponent,
    ToolbarComponent,
    ScoreComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true
    },
    {
      provide: 'BASE_API_URL',
      useValue: environment.apiBaseURL
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AccessTokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
