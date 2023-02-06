import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const UploadActionButtonsBlock = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  height: 2.225rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const UploadActionButtons = ({ onCancel, onSubmit }) => {
  return (
    <UploadActionButtonsBlock>
      <StyledButton onClick={onSubmit}>발매정보 등록</StyledButton>
      <StyledButton darkGray onClick={onCancel}>
        취소
      </StyledButton>
    </UploadActionButtonsBlock>
  );
};

export default UploadActionButtons;
