import { Component, effect, signal, computed, WritableSignal } from '@angular/core';
import { AuthModalComponent } from '../auth/auth-modal.component';
import { CommonModule } from '@angular/common';
import { changeTitleAnimated, registerScrollAnimation } from './landing.animation';
import { Scroll } from '@angular/router';
import { ScrollRevealCardComponent } from '../../components/scroll-reveal-card/scroll-reveal-card.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, AuthModalComponent, ScrollRevealCardComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  // Title
  titlePrimary = signal("SH")

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
    changeTitleAnimated(this.titlePrimary)
  }

  openModal() {
    this.isModalOpen = true;
  }
  
  closeModal() {
    this.isModalOpen = false;
  }
}