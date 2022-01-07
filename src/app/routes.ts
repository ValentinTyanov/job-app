import { AdvertisementManagementComponent } from 'src/advertisement-management/components/advertisement-management.component';

//this is temporary, should do it with dynamic module imports and using the states file for the route description
export const Routes =
{
    name: 'advertisements.**',
    url: '/advertisements',
    component: AdvertisementManagementComponent
}


//loadChildren: () => import('src/advertisement-management/components/advertisement-management.component').then((module) => module.AdvertisementManagementModule)