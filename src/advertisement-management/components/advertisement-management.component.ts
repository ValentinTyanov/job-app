import { Component, Input, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AdvertisementManagementService } from "../advertisement-management.service";
import { Advertisement, AdvertisementStatus } from '../definitions/advertisement';
import { AdvertisementManagementInputDialogComponent } from '../dialogs/advertisement-management-input-dialog.component';



@Component({
    selector: 'advertisement-management',
    templateUrl: './advertisement-management.component.html'
})
export class AdvertisementManagementComponent {
    @Input() advertisements: Advertisement[] = [];
    // @ViewChild(AdvertisementManagementListComponent) listComponent: AdvertisementManagementListComponent;
    // filteredAgents: Advertisement[] = [];

    constructor(private advertisementManagamentService: AdvertisementManagementService,
        private modalService: NgbModal) { }

    async createAdvertisement() {
        const advertisementToCreate = await this.getCreateOrEditInputDialogResult(
            'Create Advertisement', 'Create'
        );

        if (advertisementToCreate) {
            await this.advertisementManagamentService.createAdvertisement(advertisementToCreate);
            // await this.getAdvertisements();
        }

    }

    private async getCreateOrEditInputDialogResult(title: string, primaryButton: string, advertisementToUpdate?: Advertisement): Promise<any> {
        const modalRef: NgbModalRef = this.modalService.open(AdvertisementManagementInputDialogComponent, {
            backdrop: 'static'
        });

        modalRef.componentInstance.title = title;
        modalRef.componentInstance.primaryButton = primaryButton;
        modalRef.componentInstance.advertisementToUpdate = advertisementToUpdate;

        try {
            const result = await modalRef.result;
            return result;
        } catch { }
    }
}