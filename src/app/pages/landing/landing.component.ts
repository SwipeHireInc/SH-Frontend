import { Component, effect, signal, computed, WritableSignal } from '@angular/core';
import { AuthModalComponent } from './auth/auth-modal.component';
import { CommonModule } from '@angular/common';

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

  ngOnInit() {
    const OnScroll = () => {
      const scrollTop = window.scrollY;
      this.isHeaderVisible.set(scrollTop < this.lastScrollTop);
      this.lastScrollTop = scrollTop;
    }

    window.addEventListener('scroll', OnScroll);

    window.addEventListener("beforeunload", () => {
      window.removeEventListener('scroll', OnScroll);
    })
  }

  openModal() {
    this.isModalOpen = true;
  }
  
  closeModal() {
    this.isModalOpen = false;
  }
}