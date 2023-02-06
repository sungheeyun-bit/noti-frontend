import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SiNike } from 'react-icons/si';
import palette from '../../lib/styles/palette';

const CardDetailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 6px 0 6px;
  line-height: 1.4;
  user-select: none;
`;

const Text = styled.span`
  font-size: 16px;
  letter-spacing: 0.43px;
  font-family: sans-serif;
  color: #000;
  font-weight: 700;
  text-transform: uppercase;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AlarmButton = styled.button`
  padding: 10px 16px;
  background-color: ${palette.violet[0]};
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;
  &:hover {
    background-color: transparent;
    color: #000;
    border: 3px solid ${palette.violet[0]};
  }
`;

const LandingCardDetail = () => {
  return (
    <CardDetailContainer>
      <SpacedHorizontalContainer>
        <Text>
          Nike Jordan Mid SE-GC
          <SiNike size="2rem" />
        </Text>
      </SpacedHorizontalContainer>

      <SpacedHorizontalContainer>
        <Text>알림 설정 해보세요!</Text>
        <Link to="/user/alarm">
          <AlarmButton>알림</AlarmButton>
        </Link>
      </SpacedHorizontalContainer>
    </CardDetailContainer>
  );
};

export default LandingCardDetail;
