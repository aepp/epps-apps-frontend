import {
  LeftDrawerAction,
  CLOSE_DRAWER,
  OPEN_DRAWER,
  TOGGLE_DRAWER
} from '../actions/leftDrawer';
import {MainState} from './index';

export interface LeftDrawerState {
  isLeftDrawerOpen: boolean;
}

const initialState: LeftDrawerState = {
  isLeftDrawerOpen: false
};

export const reducerKey = 'leftDrawer';

export default (
  state: LeftDrawerState = initialState,
  action: LeftDrawerAction
): LeftDrawerState => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        isLeftDrawerOpen: !state.isLeftDrawerOpen
      };
    case OPEN_DRAWER:
      return {
        ...state,
        isLeftDrawerOpen: true
      };
    case CLOSE_DRAWER:
      return {
        ...state,
        isLeftDrawerOpen: false
      };
    default:
      return state;
  }
};

export const selectors = {
  isLeftDrawerOpen: (state: MainState): boolean =>
    state[reducerKey].isLeftDrawerOpen
};
