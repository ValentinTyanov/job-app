import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalOptions, ModalType } from "../definitions/componentDefinitions";
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'custom-modal',
    templateUrl: './modal.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
    @Input() options: ModalOptions;
    @Input() formGroup: FormGroup;
    @Input() beforeSubmit: any;
    formControls: any;

    primaryButtonText: string;
    secondaryButtonText: string;

    constructor(private activeModal: NgbActiveModal) { }

    ngOnInit() {
        this.primaryButtonText = this.options.primaryButtonText || this.getDefaultButtonText(this.options.modalType, true);
        this.secondaryButtonText = this.options.secondaryButtonText || this.getDefaultButtonText(this.options.modalType, false);
    }

    onSubmit() {
        if (this.beforeSubmit) {
            this.beforeSubmit().then((returnData: any) => {
                this.activeModal.close(returnData);
            });
        } else {
            this.activeModal.close();
        }
    }

    onCancel() {
        this.activeModal.dismiss();
    }

    private getDefaultButtonText(modalType: ModalType, isPrimary: boolean) {
        let typeText: 'yesno' | 'okcancel' | 'ok';
        switch (modalType) {
            case ModalType.OK:
                typeText = 'ok';
                break;
            case ModalType.OKCancel:
                typeText = 'okcancel';
                break;
            default:
                typeText = 'yesno';
        }
        switch (typeText) {
            case 'yesno':
                return isPrimary ? 'Yes' : 'No';
            case 'okcancel':
                return isPrimary ? 'OK' : 'Cancel';
            case 'ok':
                return 'OK';
        }
    }
}


