import { Injectable } from '@angular/core';

import { Crop } from './crop'
import { CROPS } from './mock-crops'

@Injectable({
  providedIn: 'root'
})
export class CropService {

    constructor() { }

    getCrops(): Crop[] {
        return CROPS
    }
}
