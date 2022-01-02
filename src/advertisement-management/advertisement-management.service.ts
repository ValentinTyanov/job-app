import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advertisement } from './definitions/advertisement';

@Injectable()
export class AdvertisementManagementService {

    constructor(private http: HttpClient) { }

    getAdvertisements() {
        return this.http.get<Advertisement[]>('/advertisements');
    }

    getAdvertisement(id: number) {
        return this.http.get<Advertisement>(`/advertisements/${id}`);
    }

    createAdvertisement(advertisement: Advertisement) {
        return this.http.post<Advertisement>(`/advertisements`, advertisement);
    }

    updateAdvertisement(advertisement: Advertisement) {
        return this.http.put<Advertisement>(`/advertisements/${advertisement.id}`, advertisement);
    }

    deleteAdvertisement(id: number) {
        return this.http.delete<void>(`/advertisements/${id}`);
    }
}