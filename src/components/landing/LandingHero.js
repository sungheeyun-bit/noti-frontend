import React from 'react';
import LandingCard from './LandingCard';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import palette from '../../lib/styles/palette';
import { StaggerContainer, TextAnimate } from '../common/Variants';

const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  min-height: 90vh;
  margin-bottom: 16px;
  padding-left: 0;
  padding-right: 0;
  margin: 2rem auto;
  width: 70%;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column-reverse;
  }
`;

const ContentBlock = styled(motion.div)`
  white-space: 4px;
  width: 40%;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 80%;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 45px;
  font-weight: 900;
  text-align: left;
  line-height: 1.4;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 2rem;
    font-size: 22px;
  }
`;

const Text = styled(motion.h2)`
  color: #a3aab2;
  opacity: 0.7;
  font-weight: 600;
  font-size: 19px;
  text-align: left;
  margin-bottom: 24px;
  line-height: 1.5;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 13px;
  }
`;

const CardBlock = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const Button = styled(motion.button)`
  padding: 10px 16px;
  background-color: ${palette.violet[0]};
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 5rem;
  }
`;

const LandingHero = () => {
  return (
    <HeroWrapper>
      <ContentBlock
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 0.5 }}
        variants={StaggerContainer}
      >
        <Title>NOTI로 발매 정보를 미리 받아 보세요.</Title>
        <Title>🔔</Title>
        <Text variants={TextAnimate}>
          꼭 갖고 싶은 아이템 놓치지 않도록 NOTI로 알림 설정 하시면 <br />
          발매 하루 전 이메일로 발매 정보를 다시 알려 드립니다.
        </Text>
        <Link to="products" smooth={true}>
          <Button whileHover={{ scale: 1.09 }}>발매 정보 바로 가기</Button>
        </Link>
      </ContentBlock>
      <CardBlock>
        <LandingCard />
      </CardBlock>
    </HeroWrapper>
  );
};

export default LandingHero;
