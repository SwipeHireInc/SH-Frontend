import {Component, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Store } from '@ngrx/store';
import {AuthState} from '../../../core/models/AuthState';
import * as AuthActions from '../../../core/services/state/authservice/auth.actions';
import {selectAccessToken} from '../../../core/services/state/authservice/auth.selectors';
import {take} from 'rxjs';

@Component({
  selector: 'choose-role',
  templateUrl: 'choose-role.component.html',
  styleUrl: 'choose-role.component.scss'
})

export class ChooseRoleComponent{
  private readonly store = inject<Store<AuthState>>(Store);

  http = inject(HttpClient)
  private baseUrl = 'http://localhost:8080'

  choose(role: "applicant" | "employer"){
    this.store.select(selectAccessToken).pipe(take(1)).subscribe(token => {
      if(token){
        this.store.dispatch(AuthActions.setRole({ role }));
      }
    })
  }
}
