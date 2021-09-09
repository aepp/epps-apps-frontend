import {combineReducers, Reducer} from 'redux';
import {RouterState} from 'connected-react-router';
import CVReducer, {
  CVState,
  reducerKey as cvReducerKey,
  selectors as cvSelectors
} from './modules/CV/reducers';
import MainReducer, {
  MainState,
  reducerKey as mainReducerKey
} from './modules/App/reducers';

export interface RootState {
  router: RouterState;
  [cvReducerKey]: CVState;
  [mainReducerKey]: MainState;
}

export const rootReducer = (routerReducer: Reducer): Reducer =>
  combineReducers<RootState>({
    router: routerReducer,
    [cvReducerKey]: CVReducer,
    [mainReducerKey]: MainReducer()
  });

export const getRouter = (state: RootState): RouterState => state.router;

export const isDownloadingCv = (state: RootState): boolean =>
  cvSelectors.isDownloadingCv(state[cvReducerKey]);
