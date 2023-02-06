import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FeatureAnimate } from '../common/Variants';

const FeatureBlock = styled(motion.div)`
  margin-top: 0;
  margin-bottom: 16px;
`;

const IconBlock = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconImg = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e0e0e0;
  margin-bottom: 16px;
  width: 72px;
  height: 72px;
  border-radius: 50%;
`;

const Title = styled(motion.div)`
  font-weight: 600;
  margin-bottom: 2.5px;
  text-align: center;
`;

const Text = styled(motion.div)`
  color: gray;
  text-align: center;
`;

const Feature = ({ title, text1, text2, icon }) => {
  return (
    <FeatureBlock variants={FeatureAnimate}>
      <IconBlock>
        <IconImg>{icon}</IconImg>
      </IconBlock>
      <Title>{title}</Title>
      <Text>{text1}</Text>
      <Text>{text2}</Text>
    </FeatureBlock>
  );
};

export default Feature;
