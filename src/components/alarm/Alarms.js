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
    ...alarmList.map((alarm) => moment(alarm.releaseDate).dayOfYear() - now),
  );

  if (user && alarmList.length <= 0) {
    return (
      <Text fontWeight="extrabold" fontSize="xl" mt="24" align="center">
        π₯ μλ¦Όλ¦¬μ€νΈμ μμ΄νμ΄ μμ΅λλ€.
      </Text>
    );
  }

  return (
    <>
      {!user ? (
        <AlarmsBlock>
          <Text fontSize="xl" mt="24" align="center">
            λ±λ‘ν μλμ νμΈνλ €λ©΄ <br /> λ‘κ·ΈμΈμ΄ νμν©λλ€.
          </Text>
          <Link to="/login">
            <Text align="center" mt="10px">
              π LOGIN
            </Text>
          </Link>
        </AlarmsBlock>
      ) : (
        <AlarmsBlock>
          <Box maxW="3xl" mx="auto" padding="3rem">
            {leftDay <= 0 ? (
              <>
                <Heading
                  mb="4"
                  fontWeight="extrabold"
                  bgGradient="linear(to-r, purple.500, purple.300, blue.500)"
                  color="purple"
                  bgClip="text"
                >
                  {alarmList[0].productName}
                </Heading>
                <Text
                  fontSize="xl"
                  fontWeight="medium"
                  bgGradient="linear(to-r, purple.500, purple.300, blue.500)"
                  bgClip="text"
                >
                  μ νμ΄ λ°λ§€λμμ΅λλ€.
                </Text>
              </>
            ) : (
              <>
                <Heading
                  mb="4"
                  fontWeight="extrabold"
                  size="xl"
                  bgGradient="linear(to-r, purple.500, purple.300, blue.500)"
                  color="purple"
                  bgClip="text"
                >
                  {leftDay}μΌ λ€,
                </Heading>
                <Text
                  fontSize="xl"
                  fontWeight="medium"
                  bgGradient="linear(to-r, purple.500, purple.300, blue.500)"
                  bgClip="text"
                >
                  {alarmList[0].productName} μ νμ΄ λ°λ§€ λ©λλ€.
                </Text>
              </>
            )}
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
