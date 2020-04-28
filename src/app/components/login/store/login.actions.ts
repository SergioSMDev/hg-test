import {Action} from '@ngrx/store';
import {Login} from '../../../shared/models';

export enum LoginActionTypes {
  SaveLogin = '[Login] Save Login',
  ClearLogin = '[Login] Clear Login',
}

export class SaveLogin implements Action {
  readonly type = LoginActionTypes.SaveLogin;

  constructor(public payload: Login) {
  }
}

export class ClearLogin implements Action {
  readonly type = LoginActionTypes.ClearLogin;
}

export type LoginActions = SaveLogin | ClearLogin;
