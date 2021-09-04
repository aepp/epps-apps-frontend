import {combineReducers, Reducer} from 'redux';
import {History, LocationState} from 'history';
import cv, {CVState} from './modules/CV/reducers';
import MainReducer, {
  MainState,
  reducerKey as mainReducerKey
} from './modules/App/reducers';
import {RouterState} from 'connected-react-router';

export interface RootState {
  router: RouterState;
  cv: CVState;
  [mainReducerKey]: MainState;
}

export const rootReducer = (routerReducer: Reducer): Reducer =>
  combineReducers<RootState>({
    router: routerReducer,
    cv,
    [mainReducerKey]: MainReducer() as any
  });

export const getRouter = (state: RootState): RouterState => state.router;
export const getLocation = (state: RootState): LocationState =>
  state.router.location;
