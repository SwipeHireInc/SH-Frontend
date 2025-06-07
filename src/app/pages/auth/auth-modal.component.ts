import { Component, ElementRef, EventEmitter, Output, ViewChild, AfterViewInit} from '@angular/core';
import { animateOpen, animateClose } from './auth-modal.animation';
import gsap from 'gsap';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss'
})
export class AuthModalComponent implements AfterViewInit {
  private url = 'http://localhost:8080/oauth2/authorization/google'
  @Output() close = new EventEmitter<void>();
  @Output() login = new EventEmitter<{username: string, password: string}>();
  loginForm: FormGroup;
  
  @ViewChild('modalOverlay', { static: false }) modalOverlay!: ElementRef;
  @ViewChild('modalContent', { static: false }) modalContent!: ElementRef;

  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    if (this.loginForm.valid) {
      this.login.emit(this.loginForm.value);
    }
  }

  forgotPassword(event: Event) {
    event.preventDefault();
  }

  signUp(event: Event) {
    event.preventDefault();
    // логика регистрации
  }

  loginWithGoogle() {
    window.location.href = this.url
  }

  closeModal() {
    animateClose(this.modalOverlay, this.modalContent, this.close);
  }

  ngAfterViewInit() {
    animateOpen(this.modalOverlay, this.modalContent);
  }

}
