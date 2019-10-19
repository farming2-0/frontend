import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'
import { Machine } from './machine'

@Injectable({
  providedIn: 'root'
})
export class MachineService {
    private machinesUrl = 'back/machines'

    constructor(private http: HttpClient) { }

    getMachines(machineId: string): Observable<Machine[]> {
        return this.http.get<Machine[]>(this.machinesUrl + '/' + machineId)
    }
}
