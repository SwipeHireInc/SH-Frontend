import {JobModel} from '../model/job_model';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../../core/services/apiservice/api.service';

@Injectable({providedIn: "root"})
export class JobService{

  constructor(private api: ApiService) {}

  getJobs(): Observable<JobModel[]>{
    return this.api.get<JobModel[]>("jobs")
  }
}
