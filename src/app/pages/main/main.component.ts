import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationPanelComponent} from '../../shared/components/navigation-panel/navigation-panel.component';

@Component({
  selector: 'app-main',
  imports: [CommonModule, NavigationPanelComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {}
