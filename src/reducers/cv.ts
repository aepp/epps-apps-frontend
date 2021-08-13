import {
  BEGIN_CV_DOWNLOAD,
  CVAction,
  FINISH_CV_DOWNLOAD,
  CHANGE_DESIGN
} from '../actions/cv';
import {DESIGN_SCHEME_ID_RETRO, DesignSchemeIdType} from '../design';

export interface CVState {
  isDownloading: boolean;
  designSchemeId: DesignSchemeIdType;
}

export default (
  state: CVState = {
    isDownloading: false,
    designSchemeId: DESIGN_SCHEME_ID_RETRO
  },
  action: CVAction
): CVState => {
  switch (action.type) {
    case BEGIN_CV_DOWNLOAD:
      return {
        ...state,
        isDownloading: true
      };
    case FINISH_CV_DOWNLOAD:
      return {
        ...state,
        isDownloading: false
      };
    case CHANGE_DESIGN:
      return {
        ...state,
        designSchemeId: action.payload.designSchemeId as DesignSchemeIdType
      };
    default:
      return state;
  }
};
