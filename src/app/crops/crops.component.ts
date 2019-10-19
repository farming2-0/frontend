import { Component, OnInit } from '@angular/core';

import { Crop } from '../crop'
import { CROPS } from '../mock-crops'

@Component({
  selector: 'app-crops',
  templateUrl: './crops.component.html',
  styleUrls: ['./crops.component.css']
})
export class CropsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    crops = CROPS
}
