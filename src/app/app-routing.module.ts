import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

// import the components for the crud operations here

const routes: Route[] = [
  // {
  //   path: '',
  //   redirectTo: 'advertisements',
  //   pathMatch: 'full',
  // },
  // {path: 'advertisements', component: AdvertisementListComponent},
  // {path: 'advertisements/:id', component: AdvertisementDetailsComponent},
  // {path: 'create', component: AdvertisementCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
