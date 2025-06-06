import { Component, ElementRef, EventEmitter, Output, ViewChild, AfterViewInit} from '@angular/core';
import { animateOpen, animateClose } from './auth-modal.animation';
import gsap from 'gsap';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss'
})
export class AuthModalComponent implements AfterViewInit {
  @Output() close = new EventEmitter<void>();
  @Output() login = new EventEmitter<{username: string, password: string}>();
  loginForm: FormGroup;
  
  @ViewChild('modalOverlay', { static: false }) modalOverlay!: ElementRef;
  @ViewChild('modalContent', { static: false }) modalContent!: ElementRef;

  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
      
    }
    )
  }

  closeModal() {
    animateClose(this.modalOverlay, this.modalContent, this.close);
  }

  ngAfterViewInit() {
    animateOpen(this.modalOverlay, this.modalContent);
  }

}
