import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable()
export class AdvertisementManagementService {
    getAdvertisements() {
        let advertisements = [];

        let advertisementRange = localStorage.length;
        for (let i = 0; i < advertisementRange; i++) {
            advertisements.push(localStorage.getItem(localStorage.key(i)));
        }

        let parsedAdvertisements = [];

        for (let i = 0; i < advertisements.length; i++) {
            parsedAdvertisements.push(JSON.parse(advertisements[i]));
        }

        return parsedAdvertisements;
    }

    getAdvertisement(id) {
        return JSON.parse(localStorage.getItem('Advertisement' + id));
    }

    createOrUpdateAdvertisement(advertisement, create) {
        if (create) {
            const id = uuid.v4();
            localStorage.setItem('Advertisement ' + id, JSON.stringify(advertisement));
            console.log("Create advertisement with id: " + id);
        } else {
            localStorage.setItem('Advertisement ' + advertisement.id, JSON.stringify(advertisement));
            console.log("Update advertisement with id: " + advertisement.id);
        }
    }

    deleteAdvertisement(id) {
        localStorage.removeItem('Advertisement' + id);
        console.log("Deleting advertisement with id: " + id);
    }


    // initializeMockupData() {
    //     const mockupData = [
    //         {
    //             "id": 1,
    //             "title": "Advertisement",
    //             "description": "Description",
    //             "salaryRange": "3000-4000",
    //             "jobType": {
    //                 "hours": "fullTime",
    //                 "remote": false
    //             },
    //             "category": "development"
    //         },
    //         {
    //             "id": 2,
    //             "title": "Advertisement 2",
    //             "description": "Description 2",
    //             "salaryRange": "2000-3000",
    //             "jobType": {
    //                 "hours": "fullTime",
    //                 "remote": false
    //             },
    //             "category": "officeAdministration"
    //         },
    //         {
    //             "id": 3,
    //             "title": "Advertisement 3",
    //             "description": "Description 3",
    //             "salaryRange": "4000-5000",
    //             "jobType": {
    //                 "hours": "fullTime",
    //                 "remote": false
    //             },
    //             "category": "qualityAssurance"
    //         }
    //     ];

    //     localStorage.setItem('Advertisements', JSON.stringify(mockupData));
    // }
}