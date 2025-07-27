import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {JobModel, Jobs} from '../model/job_model';

@Component({
  selector: 'app-jobs-page',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './jobs-page.component.html',
  styleUrl: './jobs-page.component.scss'
})
export class JobsPageComponent {
  protected readonly Jobs = Jobs;
}
