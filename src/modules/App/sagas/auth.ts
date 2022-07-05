import {takeLatest, call, select, put} from '@redux-saga/core/effects';
import {getLocation} from 'connected-react-router';
import {
  CHECK_AUTHENTICATION_STATUS,
  LOGIN,
  LOGOUT,
  SAVE_USER
} from '../actions/auth';
import {action} from '../../../index';
import {FINISH_APP_INITIALIZATION} from '../actions/app';

const checkAuthenticationStatus = (): Promise<object | null> => {
  const headers = new Headers(); // Currently empty

  headers.append('accept', 'application/json');
  headers.append('Content-Type', 'application/json');
  headers.append('Access-Control-Allow-Credentials', 'true');

  const params: RequestInit = {
    method: 'GET',
    credentials: 'include',
    headers
  };

  return fetch(
    `${process.env.REACT_APP_BACKEND_API_URL || window.location.origin}/auth/login/success`,
    params
  )
    .then(response => {
      if (response.status === 200) return response.json();
      throw new Error('failed to authenticate user');
    })
    .then(responseJson => {
      if (!('success' in responseJson)) throw new Error(responseJson);
      return responseJson;
    })
    .catch(error => {
      console.error('authentication failed', error);
    });
};

const login = (returnTo: string): void => {
  window.open(
    `${
      process.env.REACT_APP_BACKEND_API_URL
    }/auth?returnTo=${encodeURIComponent(returnTo)}`,
    '_self'
  );
};

const logout = (): Promise<any> => {
  const headers = new Headers(); // Currently empty

  headers.append('accept', 'application/json');
  headers.append('Content-Type', 'application/json');
  headers.append('Access-Control-Allow-Credentials', 'true');

  const params: RequestInit = {
    method: 'GET',
    credentials: 'include',
    headers
  };

  return fetch(`${process.env.REACT_APP_BACKEND_API_URL}/auth/logout`, params)
    .then(response => {
      if (response.status === 200) return response.json();
      throw new Error('failed to authenticate user');
    })
    .then(() => {
      action(SAVE_USER, {user: null});
    })
    .catch(error => {
      console.error('logout failed', error);
    });
};

function* handleLogin(): Generator {
  const location: any = yield select(getLocation);
  yield call(login, location?.pathname || '');
}

function* handleLogout(): Generator {
  yield call(logout);
}

function* handleCheckAuthenticationStatus(): Generator {
  const response: any = yield call(checkAuthenticationStatus);
  if (response.user) {
    yield put(action(SAVE_USER, {user: response.user}));
  }
  yield put(action(FINISH_APP_INITIALIZATION));
}

export function* watchLogin(): Generator {
  yield takeLatest(LOGIN, handleLogin);
}
export function* watchLogout(): Generator {
  yield takeLatest(LOGOUT, handleLogout);
}
export function* watchCheckAuthenticationStatus(): Generator {
  yield takeLatest(
    CHECK_AUTHENTICATION_STATUS,
    handleCheckAuthenticationStatus
  );
}
