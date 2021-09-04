import {AppAction, SET_DRAWER_STATE, TOGGLE_DRAWER} from '../actions/app';

export interface AppState {
  isDrawerOpen: boolean;
  isAuthenticated: boolean;
  user: object | null;
}

const initialState: AppState = {
  isDrawerOpen: false,
  isAuthenticated: false,
  user: null
};

export const reducerKey = 'app';

export default (
  state: AppState = initialState,
  action: AppAction
): AppState => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen
      };
    case SET_DRAWER_STATE:
      return {
        ...state,
        isDrawerOpen: Boolean(action.payload?.isDrawerOpen)
      };
    default:
      return state;
  }
};

export const selectors = {
  isUserAuthenticated: (state: AppState): boolean => state.isAuthenticated,
  getUser: (state: AppState): object | null => state.user
};
