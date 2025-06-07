import { Component, ElementRef, EventEmitter, Output, ViewChild, AfterViewInit} from '@angular/core';
import { animateOpen, animateClose } from './auth-modal.animation';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../core/services/auth.actions';

@Component({
  selector: 'app-auth-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss'
})
export class AuthModalComponent implements AfterViewInit {
  private url = 'http://localhost:8080/oauth2/authorization/google'
  @Output() close = new EventEmitter<void>();
  @ViewChild('modalOverlay', { static: false }) modalOverlay!: ElementRef;
  @ViewChild('modalContent', { static: false }) modalContent!: ElementRef;

  readonly username: string = "";
  readonly password: string = "";

  constructor(private fb: FormBuilder, private readonly store: Store ){}

  onSubmit() {
    this.store.dispatch(AuthActions.login({username: this.username, password: this.password}))
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
