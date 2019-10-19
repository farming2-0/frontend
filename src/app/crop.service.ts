import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs'

import { Crop } from './crop'
import { CROPS } from './mock-crops'

@Injectable({
  providedIn: 'root'
})
export class CropService {

    private cropsUrl = 'back/crops'
    constructor(private http: HttpClient) { }

    getCrops(): Observable<Crop[]> {
        return this.http.get<Crop[]>(this.cropsUrl)
    }
}
