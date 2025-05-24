import { Component, ElementRef, EventEmitter, Output, ViewChild, AfterViewInit} from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss'
})
export class AuthModalComponent implements AfterViewInit {
  @Output() close = new EventEmitter<void>();
  @ViewChild('modalOverlay', { static: false }) modalOverlay!: ElementRef;
  @ViewChild('modalContent', { static: false }) modalContent!: ElementRef;


  ngAfterViewInit() {
    this.animateOpen();
  }

  closeModal() {
    this.animateClose();
  }

  private animateOpen() {
    gsap.fromTo(this.modalOverlay.nativeElement, 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.3 }
    );

    gsap.fromTo(this.modalContent.nativeElement, 
      { opacity: 0, scale: 0.9, y: -30 }, 
      { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: "power2.out" }
    );
  }

  private animateClose() {
    gsap.to(this.modalContent.nativeElement, { 
      opacity: 0, scale: 0.9, y: -30, duration: 0.2, ease: "power2.in", 
      onComplete: () => this.close.emit()
    });

    gsap.to(this.modalOverlay.nativeElement, { opacity: 0, duration: 0.2 });
  }

}