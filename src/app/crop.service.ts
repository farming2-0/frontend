import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs'

import { Crop } from './crop'
import { CROPS } from './mock-crops'

@Injectable({
  providedIn: 'root'
})
export class CropService {

    constructor() { }

    getCrops(): Observable<Crop[]> {
        return of(CROPS)
    }
}
