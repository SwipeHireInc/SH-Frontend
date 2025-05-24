import { Component, effect, signal, computed, WritableSignal } from '@angular/core';
import { AuthModalComponent } from '../auth/auth-modal.component';
import { CommonModule } from '@angular/common';
import { registerScrollAnimation } from './landing.animation';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, AuthModalComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  // Title
  titlePrimary = signal("SH")
  titleRest = "wipeHire".split("");

  // Signals
  isModalOpen = false;
  lastScrollTop = 0;
  isHeaderVisible: WritableSignal<boolean> = signal(true);

  constructor() {}

  changeTitleAnimated() {
    const steps = ["SwHi", "SwiHir", "SwipHire", "SwipeHire"];
    let i = 0;

    const interval = setInterval(() => {
      if (i < steps.length) {
        this.titlePrimary.set(steps[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 400);
  }

  ngOnInit(){
    // animateTitle();
    registerScrollAnimation(
      this.isHeaderVisible,
      () => this.lastScrollTop,
      (value: number) => this.lastScrollTop = value
    )
  }

  ngAfterViewInit() {
     this.changeTitleAnimated();
  }

  openModal() {
    this.isModalOpen = true;
  }
  
  closeModal() {
    this.isModalOpen = false;
  }
}