import {DesignSchemeIdType} from '../../../theme';

export const FINISH_APP_INITIALIZATION = 'FINISH_APP_INITIALIZATION';
export type FINISH_APP_INITIALIZATION = typeof FINISH_APP_INITIALIZATION;
export const CHANGE_DESIGN = 'CHANGE_DESIGN';
export type CHANGE_DESIGN = typeof CHANGE_DESIGN;
export const RESET_APP = 'RESET_APP';
export type RESET_APP = typeof RESET_APP;

export type AppAction = {
  type: FINISH_APP_INITIALIZATION | RESET_APP | CHANGE_DESIGN;
  payload?: {
    designSchemeId?: DesignSchemeIdType;
  };
};
