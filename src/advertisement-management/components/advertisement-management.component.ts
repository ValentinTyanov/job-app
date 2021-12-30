import { AfterViewInit, Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { Advertisement, AdvertisementStatus } from '../definitions/advertisement';



@Component({
    selector: 'advertisement-management',
    templateUrl: './advertisement-management.component.html'
})
export class AdvertisementManagementComponent implements OnInit {
    @Input() advertisement: Advertisement[] = [];


    ngOnInit(): void {
    }
}