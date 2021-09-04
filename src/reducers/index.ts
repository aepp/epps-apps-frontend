import {combineReducers, Reducer} from 'redux';
import {History} from 'history';
import {connectRouter} from 'connected-react-router';
import cv, {CVState} from './cv';
import appReducer, {
  AppState,
  reducerKey as appReducerKey,
  selectors as appSelectors
} from './app';

export interface RootState {
  router: any; // @todo
  cv: CVState;
  app: AppState;
}

export const rootReducer = (history: History<any>): Reducer =>
  combineReducers<RootState>({
    router: connectRouter(history),
    cv,
    [appReducerKey]: appReducer
  });

export const isUserAuthenticated = (state: RootState): boolean =>
  appSelectors.isUserAuthenticated(state[appReducerKey]);
export const getUser = (state: RootState): object | null =>
  appSelectors.getUser(state[appReducerKey]);
