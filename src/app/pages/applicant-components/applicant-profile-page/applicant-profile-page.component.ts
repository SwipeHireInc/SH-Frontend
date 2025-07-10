import { Component } from '@angular/core';

@Component({
  selector: 'app-applicant-profile-page',
  imports: [],
  templateUrl: './applicant-profile-page.component.html',
  styleUrl: './applicant-profile-page.component.scss'
})
export class ApplicantProfilePageComponent {
  activeTab: 'responses' | 'favorites' = 'responses';

  switchTab(tab: 'responses' | 'favorites') {
    this.activeTab = tab;
  }
}
