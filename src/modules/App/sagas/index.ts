import {fork} from 'redux-saga/effects';
import {watchCheckAuthenticationStatus, watchLogin, watchLogout} from './auth';
import {watchDesignSwitch} from './design';

export default function*(): Generator {
  yield fork(watchLogin);
  yield fork(watchLogout);
  yield fork(watchCheckAuthenticationStatus);
  yield fork(watchDesignSwitch);
}
