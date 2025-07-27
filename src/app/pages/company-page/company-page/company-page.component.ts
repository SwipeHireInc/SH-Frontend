import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavigationPanelComponent} from '../company-navigation-panel/navigation-panel.component';

@Component({
  selector: 'app-company-page',
  imports: [
    RouterOutlet,
    NavigationPanelComponent
  ],
  templateUrl: './company-page.component.html',
  styleUrl: './company-page.component.scss'
})
export class CompanyPageComponent {

}
