import { Component, Input, ViewChild } from '@angular/core';
import { AdvertisementManagementService } from "../advertisement-management.service";
import { Advertisement, AdvertisementStatus } from '../definitions/advertisement';



@Component({
    selector: 'advertisement-management',
    templateUrl: './advertisement-management.component.html'
})
export class AdvertisementManagementComponent {
    @Input() advertisement: Advertisement[] = [];
    // @ViewChild(AgentManagementListComponent) listComponent: AgentManagementListComponent;
    // filteredAgents: Advertisement[] = [];

    constructor(private advertisementManagamentService: AdvertisementManagementService) { }

    createAdvertisement() {
        // advertisement input dialog here

        // call createAdd service with the result from the dialog
    }

}