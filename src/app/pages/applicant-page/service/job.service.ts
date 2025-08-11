import {JobModel} from '../model/job_model';
import { Injectable, inject } from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../../core/services/apiservice/api.service';

@Injectable({providedIn: "root"})
export class JobService{
  private api = inject(ApiService);


  getJobs(): Observable<JobModel[]>{
    return this.api.get<JobModel[]>("jobs")
  }
}
