import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Divider, Button } from '@chakra-ui/react';
import moment from 'moment';
import { FaBell } from 'react-icons/fa';

const DetailProductContainer = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
  width: 1024px;
  margin: 5rem auto;

  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DetailProductBlock = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 30px 0;
`;

const ImgBlock = styled.div`
  max-width: 500px;
  min-width: 290px;
`;

const BigImg = styled.div`
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    max-height: 400px;
    display: block;
    object-fit: cover;
    border-radius: 30px;
  }
`;

const InfoBlock = styled.div`
  max-width: 400px;
  min-width: 290px;

  @media (max-width: 480px) {
    max-width: 300px;
    min-width: 280px;
  }
`;

const TitleBlock = styled.div`
  .title {
    font-size: x-large;
  }
  .sub-title {
    color: gray;
  }
  margin-bottom: 4rem;
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3px;
  font-weight: 500;
  font-size: 17px;
  margin-top: 1rem;
`;

const Thumb = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  margin: 50px 0;
  cursor: pointer;
  img {
    width: 90px;
    height: 100%;
    display: block;
    object-fit: cover;
    border: 1px solid #ddd;
    margin: 7px;
    opacity: 0.7;
    border-radius: 8px;
    transition: 0.3s linear;
    &:active {
      opacity: 1;
      border: 2px solid #a880cf;
    }

    @media (max-width: 480px) {
      width: 58px;
      height: 80%;
    }
  }
`;

const DetailProduct = ({ product, error, alarmHandler }) => {
  const [index, setIndex] = useState(0);
  const myRef = useRef(null);

  if (error) {
    if (error.response && error.response.status === 404) {
      return (
        <DetailProductContainer>
          존재하지 않는 제품입니다.
        </DetailProductContainer>
      );
    }
    return <DetailProductContainer>오류 발생!</DetailProductContainer>;
  }

  if (!product) {
    return null;
  }

  const handleTab = (index) => {
    setIndex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace('active', '');
    }
    images[index].className = 'active';
  };

  const {
    brand,
    productName,
    engProductName,
    brandPage,
    releaseDate,
    price,
    images,
  } = product;
  const releaseDay = moment(releaseDate).format('YYYY.MM.DD');

  return (
    <DetailProductContainer>
      <DetailProductBlock>
        <ImgBlock>
          <BigImg>
            <img src={images[index]} alt="product" />
          </BigImg>
          <Thumb ref={myRef}>
            {images.map((image, index) => (
              <img
                src={image}
                key={index}
                alt="product"
                onClick={() => handleTab(index)}
              />
            ))}
          </Thumb>
        </ImgBlock>

        <InfoBlock>
          <TitleBlock>
            <p>{brand}</p>
            <p className="title">{engProductName}</p>
            <p className="sub-title">{productName}</p>
          </TitleBlock>
          <Text>
            브랜드 사이트
            <a href={brandPage}>
              <ExternalLinkIcon w={6} h={6} />
            </a>
          </Text>
          <Divider orientation="horizontal" />
          <Text>
            <span>발매일 </span>
            <span>{releaseDay}</span>
          </Text>
          <Divider orientation="horizontal" />
          <Text>
            <span>발매가격 </span>
            <span>KRW {price}</span>
          </Text>
          <Button
            leftIcon={<FaBell />}
            width="full"
            height="48px"
            mt="2rem"
            colorScheme="purple"
            onClick={() => alarmHandler(product)}
          >
            알림 추가하기
          </Button>
        </InfoBlock>
      </DetailProductBlock>
    </DetailProductContainer>
  );
};

export default DetailProduct;
