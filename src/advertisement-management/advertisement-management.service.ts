import { Injectable } from '@angular/core';
import { Advertisement } from './definitions/advertisement';
import * as advertisements from "../app/database/database.json"

@Injectable()
export class AdvertisementManagementService {

    private Advertisements: any = advertisements;

    getAdvertisements() {
        return this.Advertisements;
    }

    getAdvertisement(id: number) {
        return this.getAdvertisements().filter(a => a.id === id);
    }

    createAdvertisement(advertisement: Advertisement) {
        // this is called on click of create button
        const fs = require("fs");
        fs.writeFileSync(advertisements, "advertisement json content here");




        return this.http.post<Advertisement>(`/advertisements`, advertisement);
    }

    updateAdvertisement(advertisement: Advertisement) {
        return this.http.put<Advertisement>(`/advertisements/${advertisement.id}`, advertisement);
    }

    deleteAdvertisement(id: number) {
        return this.http.delete<void>(`/advertisements/${id}`);
    }
}