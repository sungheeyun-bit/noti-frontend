import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import alarm, { alarmSaga } from './alarm';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  alarm,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), alarmSaga()]);
}

export default rootReducer;
