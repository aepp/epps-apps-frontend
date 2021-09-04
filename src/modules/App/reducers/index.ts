import {combineReducers, Reducer} from 'redux';
import appReducer, {AppState, reducerKey as appReducerKey} from './app';
import authReducer, {
  AuthState,
  reducerKey as authReducerKey,
  selectors as authSelectors
} from './auth';
import {RootState} from '../../../rootReducer';

export const reducerKey = 'main';

export interface MainState {
  [authReducerKey]: AuthState;
  [appReducerKey]: AppState;
}

export default (): Reducer =>
  combineReducers<MainState>({
    [authReducerKey]: authReducer,
    [appReducerKey]: appReducer
  });

export const getUser = (state: RootState): object | null =>
  authSelectors.getUser(state[reducerKey]);
