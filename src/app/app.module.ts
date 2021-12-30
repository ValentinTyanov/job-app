import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UIRouterModule } from '@uirouter/angular';
import { HttpClientModule } from '@angular/common/http';
import { LazyLoadedModulesConfiguration } from './lazy-load-modules-config';

import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component'
import { AdvertisementManagementComponent } from 'src/advertisement-management/components/advertisement-management.component';


var homeState = { name: 'home', url: '/home', component: AdvertisementManagementComponent };
// var aboutState = { name: 'about', url: '/about', component: About };

let testRoutes = {
  otherwise: '/test',
  states: [homeState]
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UIRouterModule.forRoot(testRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}




