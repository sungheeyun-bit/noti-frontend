import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.21px;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  margin-bottom: 0.5rem;

  background: ${palette.violet[0]};
  &:hover {
    opacity: 0.8;
  }
  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.gray &&
    css`
      background: ${palette.gray[0]};
      border: 1px solid ${palette.gray[2]};
      color: ${palette.gray[6]};
      &:hover {
        background: ${palette.gray[1]};
      }
    `}

  ${(props) =>
    props.darkGray &&
    css`
      background: ${palette.gray[8]};
      &:hover {
        background: ${palette.gray[7]};
      }
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = (props) => {
  return props.to ? (
    <StyledLink {...props} violet={props.violet ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;
