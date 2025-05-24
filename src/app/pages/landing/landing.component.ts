import { Component, effect, signal, computed, WritableSignal } from '@angular/core';
import { AuthModalComponent } from '../auth/auth-modal.component';
import { CommonModule } from '@angular/common';
import { animateTitleRest, registerScrollAnimation } from './landing.animation';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, AuthModalComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  // Title
  titlePrimary = "SH"
  titleRest = "wipeHire".split("");

  // Signals
  isModalOpen = false;
  lastScrollTop = 0;
  isHeaderVisible: WritableSignal<boolean> = signal(true);

  constructor() {}

  ngOnInit(){
    // animateTitle();
    registerScrollAnimation(
      this.isHeaderVisible,
      () => this.lastScrollTop,
      (value: number) => this.lastScrollTop = value
    )
  }

  ngAfterViewInit() {
    animateTitleRest()
  }

  openModal() {
    this.isModalOpen = true;
  }
  
  closeModal() {
    this.isModalOpen = false;
  }
}