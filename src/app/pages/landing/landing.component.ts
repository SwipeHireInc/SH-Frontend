import { Component, effect, signal, computed, WritableSignal } from '@angular/core';
import { AuthModalComponent } from '../auth/auth-modal.component';
import { CommonModule } from '@angular/common';
import { registerScrollAnimation } from './landing.animation';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, AuthModalComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  isModalOpen = false;
  lastScrollTop = 0;
  isHeaderVisible: WritableSignal<boolean> = signal(true);

  constructor() {}

  ngOnInit(){
    registerScrollAnimation(
      this.isHeaderVisible,
      () => this.lastScrollTop,
      (value: number) => this.lastScrollTop = value
    )
  }

  openModal() {
    this.isModalOpen = true;
  }
  
  closeModal() {
    this.isModalOpen = false;
  }
}