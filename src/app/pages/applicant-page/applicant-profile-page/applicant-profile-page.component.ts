import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {UnderLineAnimation} from './animation';

@Component({
  selector: 'app-applicant-profile-page',
  imports: [
    NgOptimizedImage,
    UnderLineAnimation,
  ],
  standalone: true,
  templateUrl: './applicant-profile-page.component.html',
  styleUrl: './applicant-profile-page.component.scss'
})
export class ApplicantProfilePageComponent{
  @ViewChild("underline") underlineRef!:ElementRef<HTMLElement>;
  activeTab: "resume"| "feedback" = "feedback";

  switchTab(tab: "resume" | "feedback") {
    this.activeTab = tab;
  }
}

