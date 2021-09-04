import {AppAction, SET_DRAWER_STATE, TOGGLE_DRAWER} from '../actions/app';

export interface AppState {
  isLeftDrawerOpen: boolean;
}

const initialState: AppState = {
  isLeftDrawerOpen: false
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
        isLeftDrawerOpen: !state.isLeftDrawerOpen
      };
    case SET_DRAWER_STATE:
      return {
        ...state,
        isLeftDrawerOpen: Boolean(action.payload?.isLeftDrawerOpen)
      };
    default:
      return state;
  }
};

export const selectors = {
  isLeftDrawerOpen: (state: AppState): boolean => state.isLeftDrawerOpen
};
