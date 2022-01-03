import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbPopoverModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal.component';
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
        ModalComponent
    ],
    providers: [
    ],
    exports: [
        ModalComponent
    ],
    entryComponents: [
    ]
})
export class SharedModule { }
