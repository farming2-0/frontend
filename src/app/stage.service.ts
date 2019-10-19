import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'

import { Stage } from './stage'


@Injectable({
  providedIn: 'root'
})
export class StageService {

    private stagesUrl = 'back/stages'
    
    constructor(private http: HttpClient) { }

    getStages(stageId: string): Observable<Stage[]> {
        return this.http.get<Stage[]>(this.stagesUrl + '/' + stageId)
    }
}
