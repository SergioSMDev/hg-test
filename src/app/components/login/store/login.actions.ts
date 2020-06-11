import {Action} from '@ngrx/store';
import {LoginState} from './login.reducer';

export enum LoginActionTypes {
  SaveLogin = '[Login] Save Login',
  ClearLogin = '[Login] Clear Login',
}

export class SaveLogin implements Action {
  readonly type = LoginActionTypes.SaveLogin;

  constructor(public payload: LoginState) {
  }
}

export class ClearLogin implements Action {
  readonly type = LoginActionTypes.ClearLogin;
}

export type LoginActions = SaveLogin | ClearLogin;
