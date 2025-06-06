import { Component, ElementRef, EventEmitter, Output, ViewChild, AfterViewInit} from '@angular/core';
import { animateOpen, animateClose } from './auth-modal.animation';
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

  closeModal() {
    animateClose(this.modalOverlay, this.modalContent, this.close);
  }

  ngAfterViewInit() {
    animateOpen(this.modalOverlay, this.modalContent);
  }

}
