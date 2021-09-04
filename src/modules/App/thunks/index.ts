import {AppAction, SET_DRAWER_STATE, TOGGLE_DRAWER} from '../actions/app';

export const toggleDrawer = (): AppAction => ({type: TOGGLE_DRAWER});
export const closeDrawer = (): AppAction => ({
  type: SET_DRAWER_STATE,
  payload: {isLeftDrawerOpen: false}
});
