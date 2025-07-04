import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationPanelComponent} from '../../shared/components/navigation-panel/navigation-panel.component';
import {ProfileComponent} from '../profile/profile.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [CommonModule, NavigationPanelComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {}
