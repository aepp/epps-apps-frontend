import {combineReducers} from 'redux';
import {History} from "history";
import {connectRouter} from 'connected-react-router';
import cv, {CVState} from './cv';

export interface RootState {
  router: any, // @todo
  cv: CVState
}

export const appReducer = (history: History<any>) => combineReducers<RootState>({
  router: connectRouter(history),
  cv,
});
