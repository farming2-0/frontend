import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

import { Stage } from '../stage'
import { StageService } from '../stage.service'

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})
export class StagesComponent implements OnInit {

    constructor(private stageService: StageService,
                private route: ActivatedRoute) { }

    ngOnInit() {
        this.getStages()
    }
    
    stages: Stage[]

    getStages(): void {
        const stageId = this.route.snapshot.paramMap.get('id');
        this.stageService.getStages(stageId)
            .subscribe(stages => this.stages = stages)}
}
