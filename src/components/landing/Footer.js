import React from 'react';
import styled from 'styled-components';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import palette from '../../lib/styles/palette';

const FooterBlock = styled.div`
  width: 100%;
  margin: 0;
  background: ${palette.gray[9]};
`;

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <FooterBlock>
      <Box color="white">
        <Container
          as={Stack}
          maxW={'6xl'}
          width="100%"
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© 2023 NOTI. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton
              label={'Github'}
              href={'https://github.com/codestates/noti-client'}
            >
              <FaGithub />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </FooterBlock>
  );
};

export default Footer;
