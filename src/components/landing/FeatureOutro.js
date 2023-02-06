import React from 'react';
import { Button } from '@chakra-ui/react';
import { BsBellFill } from 'react-icons/bs';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  HeadingAnimate,
  OutroTextAnimate,
  StaggerContainer,
} from '../common/Variants';

const OutroBlock = styled.div`
  background: black;
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentBlock = styled(motion.div)`
  text-align: center;
  width: 70%;
`;

const Title = styled(motion.h1)`
  font-size: 36px;
  font-weight: 700;
  color: white;
  letter-spacing: -0.6px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Text = styled(motion.h2)`
  margin-top: 6px;
  color: white;
  line-height: 1.6;
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const FeatureOutro = () => {
  return (
    <OutroBlock>
      <ContentBlock
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 0.5 }}
        variants={StaggerContainer}
      >
        <Title variants={HeadingAnimate}>
          ❗️ 핫 아이템 정보 미리 받아 보세요.
        </Title>
        <Text variants={OutroTextAnimate}>
          꼭 갖고 싶은 아이템 놓치지 않도록 <br />
          NOTI로 미리 알림 설정 하시면
          <br />
          발매 하루 전 이메일로 발매 정보를 다시 알려 드립니다.
        </Text>
        <Button
          mt="8"
          as="a"
          href="/user/alarm"
          size="lg"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          color="white"
          borderRadius="22px"
          leftIcon={<BsBellFill />}
          letterSpacing="1px"
          _hover={{
            background: 'white',
            color: 'purple.500',
          }}
        >
          알림설정하기
        </Button>
      </ContentBlock>
    </OutroBlock>
  );
};
export default FeatureOutro;
