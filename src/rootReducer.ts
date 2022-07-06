import {combineReducers, Reducer} from 'redux';
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
  [cvReducerKey]: CVState;
  [mainReducerKey]: MainState;
}

export const rootReducer = (): Reducer =>
  combineReducers<RootState>({
    [cvReducerKey]: CVReducer,
    [mainReducerKey]: MainReducer()
  });

export const selectIsDownloadingCv = (state: RootState): boolean =>
  cvSelectors.selectIsDownloadingCv(state[cvReducerKey]);
