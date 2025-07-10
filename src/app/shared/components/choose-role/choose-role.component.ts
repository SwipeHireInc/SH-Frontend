import {Component, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Store } from '@ngrx/store';
import {AuthState} from '../../../core/models/AuthState';
import * as AuthActions from '../../../core/services/auth.actions';

@Component({
  selector: 'choose-role',
  templateUrl: 'choose-role.component.html',
  styleUrl: './auth-modal.component.scss'
})

export class ChooseRoleComponent{
  http = inject(HttpClient)
  private baseUrl = 'http://localhost:8080'

  constructor(private readonly store: Store<AuthState>) {
  }

  choose(role: "applicant" | "employer"){
    this.store.dispatch(AuthActions.setRole({ role }))
  }
}
