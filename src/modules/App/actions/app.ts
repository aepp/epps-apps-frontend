export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
export type TOGGLE_DRAWER = typeof TOGGLE_DRAWER;
export const SET_DRAWER_STATE = 'SET_DRAWER_STATE';
export type SET_DRAWER_STATE = typeof SET_DRAWER_STATE;

export type AppAction = {
  type: TOGGLE_DRAWER | SET_DRAWER_STATE;
  payload?: {
    isLeftDrawerOpen?: boolean;
  };
};
