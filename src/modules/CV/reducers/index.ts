import {BEGIN_CV_DOWNLOAD, CVAction, FINISH_CV_DOWNLOAD} from '../actions';

export interface CVState {
  isDownloading: boolean;
}

export const reducerKey = 'cv';

export default (
  state: CVState = {
    isDownloading: false
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
    default:
      return state;
  }
};

export const selectors = {
  isDownloadingCv: (state: CVState): boolean => state.isDownloading
};
