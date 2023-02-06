import React from 'react';
import styled from 'styled-components';
import AlarmItem from './AlarmItem';
import { Link } from 'react-router-dom';
import { Heading, Box, Text } from '@chakra-ui/react';
import moment from 'moment';

const AlarmsBlock = styled.div`
  margin-top: 2rem;
`;

const AlarmListBlock = styled.div`
  margin-top: 3rem;
`;

const Alarms = ({
  alarmList,
  removeFormAlarm,
  changeFromAlarm,
  loading,
  user,
}) => {
  let today = new Date();
  let now = moment(today).dayOfYear();
  let leftDay = Number.MAX_SAFE_INTEGER;

  leftDay = Math.min(
    ...alarmList
      .filter((alarm) => moment(alarm.releaseDate).dayOfYear() >= now)
      .map((alarm) => moment(alarm.releaseDate).dayOfYear() - now),
  );

  if (user && alarmList.length <= 0) {
    return (
      <Text fontWeight="extrabold" fontSize="xl" mt="24" align="center">
        😥 알림리스트에 아이템이 없습니다.
      </Text>
    );
  }

  return (
    <>
      {!user ? (
        <AlarmsBlock>
          <Text fontSize="xl" mt="24" align="center">
            등록한 알람을 확인하려면 <br /> 로그인이 필요합니다.
          </Text>
          <Link to="/login">
            <Text align="center" mt="10px">
              👉 LOGIN
            </Text>
          </Link>
        </AlarmsBlock>
      ) : (
        <AlarmsBlock>
          <Box maxW="3xl" mx="auto" padding="3rem">
            {leftDay === 0 ? (
              <Heading
                mb="4"
                fontWeight="extrabold"
                size="xl"
                bgGradient="linear(to-r, purple.500, purple.300, blue.500)"
                color="purple"
                bgClip="text"
              >
                TODAY
              </Heading>
            ) : (
              <Heading
                mb="4"
                fontWeight="extrabold"
                size="xl"
                bgGradient="linear(to-r, purple.500, purple.300, blue.500)"
                color="purple"
                bgClip="text"
              >
                {leftDay}일 뒤,
              </Heading>
            )}

            <Text
              fontSize="xl"
              fontWeight="medium"
              bgGradient="linear(to-r, purple.500, purple.300, blue.500)"
              bgClip="text"
            >
              {alarmList[0].productName} 제품이 발매 됩니다.
            </Text>
            <AlarmListBlock>
              {alarmList.length &&
                alarmList.map((item, idx) => {
                  return (
                    <AlarmItem
                      key={item.productId}
                      item={item}
                      removeFormAlarm={removeFormAlarm}
                      changeFromAlarm={changeFromAlarm}
                    />
                  );
                })}
            </AlarmListBlock>
          </Box>
        </AlarmsBlock>
      )}
    </>
  );
};

export default Alarms;
