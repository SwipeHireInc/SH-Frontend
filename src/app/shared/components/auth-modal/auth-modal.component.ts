import {Component, inject, output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/models/AppState';
import { environment } from '../../../../environments/environment';
import {InputGroup} from 'primeng/inputgroup';
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {FloatLabel} from 'primeng/floatlabel';
import {InputText} from 'primeng/inputtext';
import {ButtonDirective} from 'primeng/button';
import {FormUtilsService} from '../../utils/form-utils.service';

@Component({
  selector: 'app-auth-modal',
  imports: [ReactiveFormsModule, InputGroup, InputGroupAddon, FloatLabel, InputText, ButtonDirective],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss'
})
export class AuthModalComponent{
  private fb = inject(FormBuilder);
  private readonly store = inject<Store<AppState>>(Store);
  protected formUtils = inject(FormUtilsService);
  private url = environment.googleauth
  closed = output<void>()

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', Validators.required],
  });

  submit(){
    if(this.loginForm.valid){
      this.formUtils.markAllAsTouched(this.loginForm);
      return
    }
  }
}








