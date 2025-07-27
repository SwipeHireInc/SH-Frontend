import { Component } from '@angular/core';
import {NavigationPanelComponent} from '../navigation-panel/navigation-panel.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-applicant-page',
  imports: [
    NavigationPanelComponent,
    RouterOutlet
  ],
  templateUrl: './applicant-page.component.html',
  styleUrl: './applicant-page.component.scss'
})
export class ApplicantPageComponent {

}
