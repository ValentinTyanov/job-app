export class ModalOptions {
    modalType: ModalType;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    title: string;
}

export const enum ModalType {
    YesNo,
    OK,
    OKCancel
}