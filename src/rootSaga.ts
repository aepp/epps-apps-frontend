import appSaga from './modules/App/sagas';
import {all} from 'redux-saga/effects';

export default function*(): Generator {
  yield all([appSaga()]);
}
