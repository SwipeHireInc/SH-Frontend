import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {UnderLineAnimation} from './animation';
import {ApplicantResumeComponent} from './applicant-resume-modal/applicant-resume.component';

@Component({
  selector: 'app-applicant-profile-page',
  imports: [
    NgOptimizedImage,
    UnderLineAnimation,
    ApplicantResumeComponent,
  ],
  standalone: true,
  templateUrl: './applicant-profile-page.component.html',
  styleUrl: './applicant-profile-page.component.scss'
})
export class ApplicantProfilePageComponent{
  activeTab: "resume"| "feedback" = "feedback";

  switchTab(tab: "resume" | "feedback") {
    this.activeTab = tab;
  }
}

