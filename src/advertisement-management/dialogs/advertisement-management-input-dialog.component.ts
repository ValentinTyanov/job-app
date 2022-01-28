import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalOptions, ModalType } from "../../app/shared/definitions/componentDefinitions"
import { Advertisement } from '../definitions/advertisement';

@Component({
    selector: 'manage-advertisement-dialog',
    templateUrl: './advertisement-management-input-dialog.component.html'
})
export class AdvertisementManagementInputDialogComponent {
    @Input() primaryButton: string;
    @Input() title: string;
    @Input() advertisementToUpdate: Advertisement;

    private controlNames = ['title', 'description', 'salaryRange', 'jobType', 'category'];

    form: FormGroup;
    modalOptions: ModalOptions;
    titleValidation: string;
    descriptionValidation: string;
    salaryRangeValidation: string;
    jobTypeValidation: string;
    categoryValidation: string;

    constructor(private formBuilder: FormBuilder) {
        this.beforeSubmit = this.beforeSubmit.bind(this);
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            title: ['', [Validators.required, Validators.maxLength(100)]],
            description: ['', [Validators.required]],
            salaryRange: ['', [Validators.required]],
            jobType: ['', [Validators.required]],
            category: ['', [Validators.required,
                Validators.maxLength(21)]]
        });

        if (this.advertisementToUpdate) {
            this.form.controls['title'].setValue(this.advertisementToUpdate.title);
            this.form.controls['description'].setValue(this.advertisementToUpdate.description);
            this.form.controls['salaryRange'].setValue(this.advertisementToUpdate.salaryRange);
            this.form.controls['jobType'].setValue(this.advertisementToUpdate.jobType);
            this.form.controls['category'].setValue(this.advertisementToUpdate.category);
        }

        this.modalOptions = {
            modalType: ModalType.OKCancel,
            primaryButtonText: this.primaryButton,
            title: this.title
        };

        this.controlNames.map((name) => {
            const control = this.form.controls[name];
            control.valueChanges.subscribe((value) => this.setValidationMessage(control, name));
        })
    }

    beforeSubmit() {
        return Promise.resolve(this.form.value);
    }

    private setValidationMessage(c: AbstractControl, controlName: string) {
        if ((c.touched || c.dirty) && c.errors) {
            if (c.errors['required']) {
                const temporaryValidationMessage = controlName.toUpperCase() + ' cannot be empty';

                switch (controlName) {
                    case 'title':
                        this.titleValidation = temporaryValidationMessage;
                        break;
                    case 'description':
                        this.descriptionValidation = temporaryValidationMessage;
                        break;
                    case 'salaryRange':
                        this.salaryRangeValidation = temporaryValidationMessage;
                        break;
                    case 'jobType':
                        this.jobTypeValidation = temporaryValidationMessage;
                        break;
                    case 'category':
                        this.categoryValidation = temporaryValidationMessage;
                        break;
                }
            } else if (c.errors['maxlength']) {
                switch (controlName) {
                    case 'title':
                        this.titleValidation = 'Advertisement title is too long';
                        break;
                    case 'category':
                        this.categoryValidation = 'You can only choose one category (Office Administration / Development / Quality Assurance)';
                        break;
                }
            }
        } else {
            switch (controlName) {
                case 'title':
                    this.titleValidation = "";
                    break;
                case 'description':
                    this.descriptionValidation = "";
                    break;
                case 'salaryRange':
                    this.salaryRangeValidation = "";
                    break;
                case 'jobType':
                    this.jobTypeValidation = "";
                    break;
                case 'category':
                    this.categoryValidation = "";
                    break;
            }
        }
    }
}