import { AdvertisementManagementComponent } from './components/advertisement-management.component';
import { Ng2StateDeclaration } from '@uirouter/angular';
import { AdvertisementManagementService } from './advertisement-management.service';

let advertisementManagementService: AdvertisementManagementService = null;

/**
 * @ngInject
 */
export function advertisementsDataResolver($transition$) {
    if (!advertisementManagementService) {
        advertisementManagementService = $transition$.injector().get(AdvertisementManagementService);
    }
    return advertisementManagementService.getAdvertisements();
}

export const AdvertisementManagementStates: Ng2StateDeclaration[] = [{
    name: 'advertisements',
    url: '/',
    component: AdvertisementManagementComponent,
    resolve: {
        advertisements: advertisementsDataResolver
    }
}];
