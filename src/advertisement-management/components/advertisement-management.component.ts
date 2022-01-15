import { Component, Input, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AdvertisementManagementService } from "../advertisement-management.service";
import { Advertisement, AdvertisementStatus } from '../definitions/advertisement';
import { AdvertisementManagementInputDialogComponent } from '../dialogs/advertisement-management-input-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog.component';



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

        if (advertisementToCreate != null) {
            await this.advertisementManagamentService.createOrUpdateAdvertisement(advertisementToCreate);
            await this.getAdvertisements();
        }
    }

    async updateAdvertisement(advertisement) {
        const advertisementToUpdate = await this.getCreateOrEditInputDialogResult(
            'Update Advertisement', 'Update', advertisement
        );

        if (advertisementToUpdate != null) {
            await this.advertisementManagamentService.createOrUpdateAdvertisement(advertisementToUpdate);
            await this.getAdvertisements();
        }
    }

    async getAdvertisements() {
        this.advertisements = await this.advertisementManagamentService.getAdvertisements();
    }

    async deleteAdvertisement(advertisement) {
        const shouldDeleteAdvertisement: boolean = await this.getDeleteConfirmationDialogResult('Confirm Delete Advertisement', `Are you sure you want to delete advertisement ${advertisement.title}?`);
        if (shouldDeleteAdvertisement) {
            await this.advertisementManagamentService.deleteAdvertisement(advertisement.id));
            await this.getAdvertisements();
        }
    }

    private async getCreateOrEditInputDialogResult(title: string, primaryButton: string, advertisement?: Advertisement): Promise<any> {
        const modalRef: NgbModalRef = this.modalService.open(AdvertisementManagementInputDialogComponent, {
            backdrop: 'static'
        });

        modalRef.componentInstance.title = title;
        modalRef.componentInstance.primaryButton = primaryButton;
        modalRef.componentInstance.advertisement = advertisement;

        try {
            const result = await modalRef.result;
            return result;
        } catch { }
    }

    private async getDeleteConfirmationDialogResult(title: string, message: string): Promise<boolean> {
        const modalRef = this.modalService.open(ConfirmationDialogComponent, {
            backdrop: 'static'
        });

        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = message;

        try {
            await modalRef.result;
            return true;
        } catch {
            return false;
        }
    }
}