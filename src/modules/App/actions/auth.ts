export const LOGIN = 'LOGIN';
export type LOGIN = typeof LOGIN;
export const LOGOUT = 'LOGOUT';
export type LOGOUT = typeof LOGOUT;
export const CHECK_AUTHENTICATION_STATUS = 'CHECK_AUTHENTICATION_STATUS';
export type CHECK_AUTHENTICATION_STATUS = typeof CHECK_AUTHENTICATION_STATUS;
export const SAVE_USER = 'SAVE_USER';
export type SAVE_USER = typeof SAVE_USER;

export type AuthAction = {
  type: LOGIN | LOGOUT | CHECK_AUTHENTICATION_STATUS | SAVE_USER;
  payload?: {
    user?: any;
  };
};
