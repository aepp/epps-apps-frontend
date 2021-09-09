import {DesignSchemeIdType} from '../../../theme';
import {DESIGN_SCHEME_ID_RETRO} from '../../../theme/retro';
import {
  AppAction,
  FINISH_APP_INITIALIZATION,
  RESET_APP,
  CHANGE_DESIGN
} from '../actions/app';
import {MainState} from './index';

export interface AppState {
  isInitialized: boolean;
  designSchemeId: DesignSchemeIdType;
}

const initialState: AppState = {
  isInitialized: false,
  designSchemeId: (window.localStorage.getItem('designSchemeId') ||
    DESIGN_SCHEME_ID_RETRO) as DesignSchemeIdType
};

export const reducerKey = 'app';

export default (
  state: AppState = initialState,
  action: AppAction
): AppState => {
  switch (action.type) {
    case FINISH_APP_INITIALIZATION:
      return {
        ...state,
        isInitialized: true
      };
    case RESET_APP:
      return {
        ...initialState
      };
    case CHANGE_DESIGN:
      return {
        ...state,
        designSchemeId: action.payload?.designSchemeId || DESIGN_SCHEME_ID_RETRO
      };
    default:
      return state;
  }
};

export const selectors = {
  isAppInitialized: (state: MainState): boolean =>
    state[reducerKey].isInitialized,
  getCurrentDesignSchemeId: (state: MainState): DesignSchemeIdType =>
    state[reducerKey].designSchemeId
};
