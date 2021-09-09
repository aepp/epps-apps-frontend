export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
export type TOGGLE_DRAWER = typeof TOGGLE_DRAWER;
export const CLOSE_DRAWER = 'CLOSE_DRAWER';
export type CLOSE_DRAWER = typeof CLOSE_DRAWER;
export const OPEN_DRAWER = 'OPEN_DRAWER';
export type OPEN_DRAWER = typeof OPEN_DRAWER;

export type LeftDrawerAction = {
  type: TOGGLE_DRAWER | OPEN_DRAWER | CLOSE_DRAWER;
  payload?: {
    isLeftDrawerOpen?: boolean;
  };
};
