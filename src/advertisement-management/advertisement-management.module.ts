import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule } from '@uirouter/angular';
import { SharedModule } from '../app/shared/shared.module'
import { AdvertisementManagementService } from './advertisement-management.service';
import { AdvertisementManagementComponent } from './components/advertisement-management.component';
// TODO: IMPORT THIS
// import { AdvertisementManagementListComponent } from './components/Advertisement-management-list/advertisement-management-list.component';
import { AdvertisementManagementInputDialogComponent } from './dialogs/advertisement-management-input-dialog.component';
import { AdvertisementManagementStates } from './advertisement-management.states';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        UIRouterModule.forChild({ states: AdvertisementManagementStates }),
        ReactiveFormsModule,
        NgbPopoverModule
    ],
    declarations: [
        AdvertisementManagementComponent,
        // AdvertisementManagementListComponent,
        AdvertisementManagementInputDialogComponent,
    ],
    providers: [
        AdvertisementManagementService
    ],
    entryComponents: [
        AdvertisementManagementComponent
    ]
})

export class AdvertisementManagementModule { }
