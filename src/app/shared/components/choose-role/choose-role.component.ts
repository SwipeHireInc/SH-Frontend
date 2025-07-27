import {Component, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Store } from '@ngrx/store';
import {AuthState} from '../../../core/models/AuthState';
import * as AuthActions from '../../../core/services/authservice/auth.actions';
import {selectAccessToken} from '../../../core/services/authservice/auth.selectors';
import {take} from 'rxjs';

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
    this.store.select(selectAccessToken).pipe(take(1)).subscribe(token => {
      if(token){
        this.store.dispatch(AuthActions.setRole({ role }));
      }
    })
  }
}
