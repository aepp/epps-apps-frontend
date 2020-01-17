import {combineReducers} from 'redux';
import {History} from 'history';
import {connectRouter} from 'connected-react-router';
import cv, {CVState} from './cv';
import app, {AppState} from './app';

export interface RootState {
  router: any; // @todo
  cv: CVState;
  app: AppState;
}

export const appReducer = (history: History<any>) =>
  combineReducers<RootState>({
    router: connectRouter(history),
    cv,
    app
  });
