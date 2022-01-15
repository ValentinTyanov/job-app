import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbPopoverModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule,
        NgbPopoverModule,
        FormsModule,
        NgbModalModule,
        ReactiveFormsModule
    ],
    declarations: [
        ModalComponent,
        ConfirmationDialogComponent
    ],
    providers: [
    ],
    exports: [
        ModalComponent,
        ConfirmationDialogComponent
    ],
    entryComponents: [
        ConfirmationDialogComponent
    ]
})
export class SharedModule { }
