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
            let unidentifiedAdd = { ...advertisement, id: uuid.v4() };
            localStorage.setItem('Advertisement ' + unidentifiedAdd.id, JSON.stringify(unidentifiedAdd));
        } else {
            localStorage.setItem('Advertisement ' + advertisement.id, JSON.stringify(advertisement));
        }
    }

    deleteAdvertisement(advertisement) {
        localStorage.removeItem(`Advertisement ${advertisement.id}`);
    }
}