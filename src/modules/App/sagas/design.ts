import {takeLatest} from '@redux-saga/core/effects';
import {AppAction, CHANGE_DESIGN} from '../actions/app';
import {DESIGN_SCHEME_ID_RETRO} from '../../../theme/retro';

// eslint-disable-next-line require-yield
function* handleDesignSwitch(action: AppAction): Generator {
  window.localStorage.setItem(
    'designSchemeId',
    action.payload?.designSchemeId || DESIGN_SCHEME_ID_RETRO
  );
}

export function* watchDesignSwitch(): Generator {
  yield takeLatest(CHANGE_DESIGN, handleDesignSwitch);
}
