import { Component, effect, signal, computed, WritableSignal, OnInit, AfterViewInit } from '@angular/core';
import { AuthModalComponent } from '../../shared/components/auth-modal/auth-modal.component';
import { CommonModule } from '@angular/common';
import { changeTitleAnimated, registerScrollAnimation } from './landing.animation';
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, AuthModalComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {
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
