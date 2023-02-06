import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as alarmAPI from '../lib/api/alarm';
import { takeLatest } from 'redux-saga/effects';

const [LIST_ALARMS, LIST_ALARMS_SUCCESS, LIST_ALARMS_FAILURE] =
  createRequestActionTypes('alarm/LIST_ALARMS');

const [REMOVE_ALARM, REMOVE_ALARM_SUCCESS, REMOVE_ALARM_FAILURE] =
  createRequestActionTypes('alarm/REMOVE_ALARM');

const [CHANGE_ALARM, CHANGE_ALARM_SUCCESS, CHANGE_ALARM_FAILURE] =
  createRequestActionTypes('alarm/CHANGE_ALARM');

const UNLOAD_ALARM = 'alarm/UNLOAD_ALARM';

export const listAlarms = createAction(LIST_ALARMS);
export const removeAlarm = createAction(REMOVE_ALARM, (id) => id);
export const changeAlarm = createAction(CHANGE_ALARM, (body) => body);
export const unloadAlarm = createAction(UNLOAD_ALARM);

const listAlarmsSaga = createRequestSaga(LIST_ALARMS, alarmAPI.listAlarms);
const removeAlarmSaga = createRequestSaga(
  REMOVE_ALARM,
  alarmAPI.removeFormAlarm,
);
const changeAlarmSaga = createRequestSaga(
  CHANGE_ALARM,
  alarmAPI.changeFromAlarm,
);

export function* alarmSaga() {
  yield takeLatest(LIST_ALARMS, listAlarmsSaga);
  yield takeLatest(REMOVE_ALARM, removeAlarmSaga);
  yield takeLatest(CHANGE_ALARM, changeAlarmSaga);
}

const initialState = {
  alarmList: [],
  alarmError: null,
};

const updateAlarmList = (state, { payload: alarmList }) => ({
  ...state,
  alarmList,
});

const updateError = (state, { payload: alarmError }) => ({
  ...state,
  alarmError,
});

const alarm = handleActions(
  {
    [LIST_ALARMS_SUCCESS]: updateAlarmList,
    [LIST_ALARMS_FAILURE]: updateError,
    [REMOVE_ALARM_SUCCESS]: updateAlarmList,
    [REMOVE_ALARM_FAILURE]: updateError,
    [CHANGE_ALARM_SUCCESS]: updateAlarmList,
    [CHANGE_ALARM_FAILURE]: updateError,
    [UNLOAD_ALARM]: () => initialState,
  },
  initialState,
);

export default alarm;





