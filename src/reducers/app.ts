import {AppAction, SET_DRAWER_STATE, TOGGLE_DRAWER} from '../actions/app';

export interface AppState {
  isDrawerOpen: boolean;
}

export default (
  state: AppState = {
    isDrawerOpen: false
  },
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
