import {combineReducers, Reducer} from 'redux';
import AppReducer, {
  AppState,
  reducerKey as appReducerKey,
  selectors as appSelectors
} from './app';
import LeftDrawerReducer, {
  LeftDrawerState,
  reducerKey as leftDrawerReducerKey,
  selectors as leftDrawerSelectors
} from './leftDrawer';
import AuthReducer, {
  AuthState,
  reducerKey as authReducerKey,
  selectors as authSelectors
} from './auth';
import {RootState} from '../../../rootReducer';
import {DesignSchemeIdType} from '../../../theme';

export const reducerKey = 'main';

export interface MainState {
  [authReducerKey]: AuthState;
  [leftDrawerReducerKey]: LeftDrawerState;
  [appReducerKey]: AppState;
}

export default (): Reducer =>
  combineReducers<MainState>({
    [authReducerKey]: AuthReducer,
    [leftDrawerReducerKey]: LeftDrawerReducer,
    [appReducerKey]: AppReducer
  });

/** app **/
export const isAppInitialized = (state: RootState): boolean =>
  appSelectors.isAppInitialized(state[reducerKey]);
export const getCurrentDesignSchemeId = (
  state: RootState
): DesignSchemeIdType =>
  appSelectors.getCurrentDesignSchemeId(state[reducerKey]);

/** auth **/
export const getUser = (state: RootState): object | null =>
  authSelectors.getUser(state[reducerKey]);

/** left drawer **/
export const isLeftDrawerOpen = (state: RootState): boolean =>
  leftDrawerSelectors.isLeftDrawerOpen(state[reducerKey]);
