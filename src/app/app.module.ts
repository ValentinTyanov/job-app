import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UIRouterModule } from '@uirouter/angular';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from './routes';

import { AppComponent } from './app.component'


// var homeState = { name: 'home', url: '/home', component: AdvertisementManagementComponent };
// var aboutState = { name: 'about', url: '/about', component: About };

let routerConfig = {
  otherwise: '/test',
  states: [Routes]
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UIRouterModule.forRoot(routerConfig),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}




