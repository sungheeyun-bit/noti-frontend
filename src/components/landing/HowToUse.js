import React from 'react';
import Feature from './HowToUseDetail';
import { Icon } from '@chakra-ui/react';
import { FcLike, FcAlarmClock, FcAdvertising } from 'react-icons/fc';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { StaggerContainer, HeadingAnimate } from '../common/Variants';

const HowToUseBlock = styled(motion.div)`
  padding: 4px;
  background: #f5f5f7;
`;

const FeatureBlock = styled(motion.div)`
  margin: 2rem auto;
  width: 70%;
  display: grid;
  align-items: center;
  min-height: 28vh;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 3fr);
    margin-bottom: 5rem;
    width: 100%;
  }
`;

const Heading = styled(motion.div)`
  text-align: center;
  font-size: 39px;
  font-weight: 800;
  margin: 50px auto;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const HowToUse = () => {
  return (
    <HowToUseBlock
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{ once: true, amount: 0.5 }}
      variants={StaggerContainer}
    >
      <Heading variants={HeadingAnimate}>간편하게 NOTI를 이용하는 방법</Heading>
      <FeatureBlock>
        <Feature
          icon={<Icon as={FcLike} w={10} h={10} />}
          title={'원하는 상품 저장'}
          text1={'발매정보에서 원하시는 상품을 검색하고'}
          text2={'저장 버튼을 눌러 주세요.'}
        />
        <Feature
          icon={<Icon as={FcAlarmClock} w={10} h={10} />}
          title={'알림 설정'}
          text1={'저장한 상품은 알림 리스트에서'}
          text2={'알림 설정 또는 삭제 할 수 있습니다.'}
        />
        <Feature
          icon={<Icon as={FcAdvertising} w={10} h={10} />}
          title={'발매정보 미리 받기'}
          text1={'알림 설정한 제품은 발매 하루 전'}
          text2={'이메일로 발매 정보를 다시 알려 드립니다.'}
        />
      </FeatureBlock>
    </HowToUseBlock>
  );
};

export default HowToUse;
