import {LoginActionTypes} from './login.actions';
import * as fromRoot from '../../../store/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
  login: LoginState;
}

export interface LoginState {
  username: string;
  email: string;
  password: string;
}

const initialState: LoginState = {
  username: '',
  email: '',
  password: '',
};


const getLoginState = createFeatureSelector<LoginState>('login');
export const getLoginData = createSelector(getLoginState, login => login);

export function loginReducer(state = initialState, action): LoginState {
  switch (action.type) {

    case LoginActionTypes.SaveLogin:
      return {
        ...state,
        ...action.payload
      };

    case LoginActionTypes.ClearLogin:
      return {
        username: '',
        email: '',
        password: '',
      };

    default:
      return state;
  }
}
