import {AuthAction, SAVE_USER} from '../actions/auth';
import {MainState} from './index';

export interface AuthState {
  user: object | null;
}

const initialState: AuthState = {
  user: null
};

export const reducerKey = 'auth';

export default (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        user: action.payload?.user
      };
    default:
      return state;
  }
};

export const selectors = {
  getUser: (state: MainState): object | null => state[reducerKey].user
};
