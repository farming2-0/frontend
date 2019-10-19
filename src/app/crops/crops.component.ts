import { Component, OnInit } from '@angular/core';

import { Crop } from '../crop'
import { CropService } from '../crop.service'


@Component({
  selector: 'app-crops',
  templateUrl: './crops.component.html',
  styleUrls: ['./crops.component.css']
})
export class CropsComponent implements OnInit {

    constructor(private cropService: CropService) { }

    ngOnInit() {
        this.getCrops()
    }

    selectedCrop: Crop
    crops: Crop[]

    onSelect(crop: Crop): void {
        this.selectedCrop = crop
    }

    getCrops(): void {
        this.cropService.getCrops()
            .subscribe(crops => this.crops = crops)
    }
}
