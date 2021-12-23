import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:4200/advertisements';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementsService {
  constructor(private http: HttpClient) {}

  readAll(): Observable<any> {
    return this.http.get(baseURL);
  }

  read(id: any): Observable<any> {
    return this.http.get(`${baseURL}/${id}`);
  }

  create(advertisement: any): Observable<any> {
    return this.http.post(baseURL, advertisement);
  }

  update(id: any, advertisement: any): Observable<any> {
    return this.http.put(`${baseURL}/${id}`, advertisement);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseURL);
  }

  // searchByName(name: any): Observable<any> {
  //   return this.http.get(`${baseURL}?name=${name}`);
  // }
}
