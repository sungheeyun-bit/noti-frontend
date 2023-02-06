import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';


const Footer = styled.div`
  text-align: right;
  margin-top: 1.5rem;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[8]};
    }
  }
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type, form, onChange, onSubmit, error, loginGoogle }) => {
  const text = textMap[type];

  return (
    <>
      <form onSubmit={onSubmit}>
        <FormControl mt={5} isRequired>
          <FormLabel mt={3}>💌 이메일</FormLabel>
          <Input
            autoComplete="email"
            name="email"
            type="email"
            placeholder="이메일을 입력해주세요."
            onChange={onChange}
            value={form.email}
          />
          <FormLabel mt={3}>🔐 비밀번호</FormLabel>
          <Input
            autoComplete="new-password"
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={onChange}
            value={form.password}
          />
          {type === 'register' && (
            <FormControl isRequired>
              <FormLabel mt={3}>🔐 비밀번호 확인</FormLabel>
              <Input
                autoComplete="new-password"
                name="passwordConfirm"
                type="password"
                placeholder="비밀번호를 다시 한번 입력해주세요."
                onChange={onChange}
                value={form.passwordConfirm}
              />
            </FormControl>
          )}
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button fullWidth style={{ marginTop: '1rem' }}>
            {text}
          </Button>
          {type === 'login' && (
            <Button
              gray
              fullWidth
              style={{ display: 'flex', justifyContent: 'space-between' }}
              onClick={loginGoogle}
            >
              <FcGoogle size={28} />
              Google로 시작하기
              <span></span>
            </Button>
          )}
        </FormControl>
        <Footer>
          {type === 'login' ? (
            <Link to="/register">회원가입</Link>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </Footer>
      </form>
    </>
  );
};

export default AuthForm;
