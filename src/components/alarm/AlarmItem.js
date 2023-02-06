import React, { useState } from 'react';
import { Switch, Divider, IconButton, Avatar, Link } from '@chakra-ui/react';
import { FcFullTrash } from 'react-icons/fc';
import moment from 'moment';
import AskRemoveModal from './AskRemoveModal';
import styled from 'styled-components';

const AlarmItemContainer = styled.div`
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
`;

const ProductBlock = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

const RemoveButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductDetail = styled.div`
  margin-left: 2rem;

  h1 {
    line-height: 27px;
    font-size: 19px;
    max-width: 100%;
    border-radius: 5rem;
  }

  h2 {
    font-weight: 800;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 27px;
    margin: 7px 0;
  }

  @media (max-width: 480px) {
    margin-top: 12px;
  }
`;

const AlarmItem = ({ item, removeFormAlarm, changeFromAlarm }) => {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState('');
  const releaseDayFormat = moment(item.releaseDate).format('YYYY.MM.DD');

  let today = new Date();
  let now = moment(today).dayOfYear();
  let releaseLeftDay = moment(item.releaseDate).dayOfYear() - now;

  const onRemoveClick = () => {
    setModal(true);
  };

  const onCancel = () => {
    setModal(false);
  };

  const onConfirm = () => {
    setModal(false);
    removeFormAlarm(id);
  };

  const selectedId = (id) => {
    setId(id);
  };

  return (
    <>
      <Divider />
      <AlarmItemContainer>
        <ProductBlock>
          <Link href={`/product/${item.productId}`}>
            <Avatar size="xl" name="shoes" src={item.images[0]} />
          </Link>
          <ProductDetail>
            {releaseLeftDay >= 0 ? (
              <h1 ml="6" fontSize="xl" background="#ffe4e1">
                {releaseDayFormat} 발매예정
              </h1>
            ) : (
              <h2 ml="6" fontSize="xl">
                🎉 발매완료!
              </h2>
            )}
            <p>{item.productName}</p>
            {/* {item.alarm ? (
              <Switch
                isInvalid
                defaultChecked
                size="lg"
                onChange={() => changeFromAlarm(item.productId)}
              />
            ) : (
              <Switch
                isInvalid
                size="lg"
                onChange={() => changeFromAlarm(item.productId)}
              />
            )} */}
          </ProductDetail>
        </ProductBlock>
        <RemoveButtonBlock>
          <IconButton
            ml="0"
            icon={<FcFullTrash />}
            size="md"
            isRound="true"
            onClick={() => {
              onRemoveClick();
              selectedId(item.productId);
            }}
          />
        </RemoveButtonBlock>

        <AskRemoveModal
          visible={modal}
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
      </AlarmItemContainer>
    </>
  );
};

export default AlarmItem;
