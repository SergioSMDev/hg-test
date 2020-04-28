import {LoginActionTypes} from './login.actions';

const initialState = {
  login: {
    username: '',
    password: '',
  }
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {

    case LoginActionTypes.SaveLogin:
      return {
        ...state,
        login: {...action.payload}
      };

    case LoginActionTypes.ClearLogin:
      return {
        ...state,
        login: null
      };

    default:
      return state;
  }
}
