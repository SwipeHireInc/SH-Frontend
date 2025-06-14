import { Component, ElementRef, EventEmitter, Output, ViewChild, AfterViewInit} from '@angular/core';
import { animateOpen, animateClose } from './auth-modal.animation';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../core/services/auth.actions';
import { Observable } from 'rxjs';
import { AppState } from '../../core/models/AppState';
import { AsyncPipe } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-auth-modal',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss'
})
export class AuthModalComponent implements AfterViewInit {
  private url = environment.googleauth

  @Output() close = new EventEmitter<void>();
  @ViewChild('modalOverlay', { static: false }) modalOverlay!: ElementRef;
  @ViewChild('modalContent', { static: false }) modalContent!: ElementRef;

  loginform: FormGroup
  loading$: Observable<boolean>
  error$: Observable<string | null>
  token$: Observable<string | null>

  constructor(private fb: FormBuilder, private readonly store: Store<AppState>){
    this.loading$ = this.store.select(state => state.auth.loading)
    this.error$ = this.store.select(state => state.auth.error);
    this.token$ = this.store.select(state => state.auth.token);

    this.loginform = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: [false]
    })
  }

  onSubmit() {
    if(this.loginform.invalid) return 

    const {username, password, remember} = this.loginform.value

    this.store.dispatch(AuthActions.login({username: username, password: password}))
    console.log('Clicked!')

    if(remember){
      localStorage.setItem("rememberedUSER", username)
    }else {
      localStorage.removeItem('rememberedUsername');
    }
  }

  // ts
  forgotPassword() {}

  //
  signUp() {}

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
