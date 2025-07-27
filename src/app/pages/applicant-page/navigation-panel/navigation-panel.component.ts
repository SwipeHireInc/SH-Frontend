import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navigation-panel',
  imports: [CommonModule, RouterLink],
  templateUrl: './navigation-panel.component.html',
  styleUrl: './navigation-panel.component.scss'
})
export class NavigationPanelComponent {}
