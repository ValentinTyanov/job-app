import { Injectable } from '@angular/core';

@Injectable()
export class AdvertisementManagementService {
    private fs = require("fs");

    // call this before calling any of the other service methods
    // UPDATE: this maybe won't be needed as local storage persists even after browser closes so once I have some data stored this won't be needed
    initializeMockupData() {
        const mockupData = this.fs.readFileSync("../app/database/advertisements.json");
        localStorage.setItem('Advertisements', JSON.stringify(mockupData));
    }

    getAdvertisements() {
        return JSON.parse(JSON.stringify(localStorage));
    }

    getAdvertisement(id) {
        return JSON.parse(localStorage.getItem('Advertisement' + id));
    }

    createOrUpdateAdvertisement(advertisement) {
        localStorage.setItem('Advertisement ' + advertisement.id, JSON.stringify(advertisement));
        console.log("Create / Update advertisement with id: " + advertisement.id);
    }

    deleteAdvertisement(id) {
        localStorage.removeItem('Advertisement' + id);
        console.log("Deleting advertisement with id: " + id);
    }
}