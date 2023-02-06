import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAlarm, changeAlarm } from '../../modules/alarm';
import Alarms from '../../components/alarm/Alarms';

const AlarmsContainer = () => {
  const dispatch = useDispatch();
  const { alarmList, loading, user } = useSelector(
    ({ alarm, loading, user }) => ({
      alarmList: alarm.alarmList,
      loading: loading['alarm/LIST_ALARMS'],
      user: user.user,
    }),
  );

  const removeFormAlarm = (productId) => {
    dispatch(removeAlarm(productId));
  };

  const changeFromAlarm = (productId) => {
    const body = alarmList.filter((item) => item.productId === productId);
    dispatch(changeAlarm(body));
  };

  return (
    <>
      {!loading && (
        <Alarms
          alarmList={alarmList}
          loading={loading}
          removeFormAlarm={removeFormAlarm}
          changeFromAlarm={changeFromAlarm}
          user={user}
        />
      )}
    </>
  );
};

export default AlarmsContainer;
