import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalOptions, ModalType } from '../definitions/componentDefinitions';

@Component({
    selector: 'confirmation-modal',
    template:
        `<custom-modal [formGroup]="form" [options]="options">
  <div>{{message}}</div>
</custom-modal>`
})
export class ConfirmationDialogComponent implements OnInit {
    form: FormGroup = new FormGroup({});
    message: string;
    title: string;
    options: ModalOptions = {
        title: null,
        modalType: ModalType.YesNo
    };

    ngOnInit() {
        this.options.title = this.title;
    }
}
