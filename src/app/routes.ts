/**
 * These modules are only loaded when browsed to
 */

export const Routes = [
    {
        name: 'advertisements.**',
        url: '/',
        loadChildren: () => import('../advertisement-management/advertisement-management.module').then((module) => module.AdvertisementManagementModule)
    }
]