import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Machine } from '../machine'
import { MachineService } from '../machine.service'

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {

    constructor(private machineService: MachineService,
                private route: ActivatedRoute) { }

    ngOnInit() {
        this.getMachines()
    }

    machines: Machine[]

    getMachines(): void {
        const machineId = this.route.snapshot.paramMap.get('id')
        this.machineService.getMachines(machineId)
            .subscribe(machines => this.machines = machines)}

}
