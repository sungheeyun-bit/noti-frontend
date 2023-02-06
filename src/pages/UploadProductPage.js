import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';
import FileUpload from '../components/common/FileUpload';
import UploadActionButtons from '../components/upload/UploadActionButtons';
import { useNavigate } from 'react-router-dom';
import { uploadProduct } from '../lib/api/products';
import { useSelector } from 'react-redux';

const UploadProductPage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [inputs, setInputs] = useState({
    brand: '',
    productName: '',
    engProductName: '',
    brandPage: '',
    price: '',
    releaseDate: '',
  });
  const [images, setImages] = useState([]);

  const { brand, productName, engProductName, brandPage, price, releaseDate } =
    inputs;
  const { isAdmin } = user.user;

  if (!isAdmin) {
    return (
      <Text align="center" marginTop="3rem">
        관리자만 이용할 수 있습니다.
      </Text>
    );
  }

  const onChange = (e) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  const onSubmit = (e) => {
    if (
      !brand ||
      !productName ||
      !engProductName ||
      !brandPage ||
      !price ||
      !releaseDate ||
      images.length === 0
    ) {
      return alert('모든 값을 넣어주셔야 합니다.');
    }

    try {
      uploadProduct({
        brand,
        productName,
        engProductName,
        brandPage,
        price,
        releaseDate,
        images,
      });
      navigate('/');
    } catch (e) {
      console.log(e);
    }
    navigate('/');
  };

  const onCancel = () => {
    navigate(-1);
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={10}>
        <Box textAlign="center">
          <Heading m={10}>발매정보 업로드</Heading>
        </Box>

        <FileUpload updateImages={updateImages} />

        <FormControl mt={10} isRequired>
          <FormLabel>브랜드명</FormLabel>
          <Input
            name="brand"
            placeholder="브랜드명을 입력해주세요."
            onChange={onChange}
            value={brand}
          />
          <FormLabel mt={4}>제품명(한글)</FormLabel>
          <Input
            name="productName"
            placeholder="한글로 제품명을 입력해주세요."
            onChange={onChange}
            value={productName}
          />
          <FormLabel mt={4}>제품명(영문)</FormLabel>
          <Input
            name="engProductName"
            placeholder="영문으로 제품명을 입력해주세요."
            onChange={onChange}
            value={engProductName}
          />
          <FormLabel mt={4}>브랜드페이지</FormLabel>
          <Input
            name="brandPage"
            placeholder="브랜드페이지를 입력해주세요."
            onChange={onChange}
            value={brandPage}
          />
          <FormLabel mt={4}>발매일</FormLabel>
          <Input
            name="releaseDate"
            placeholder="발매일자을 입력해주세요. ex.2022-10-10"
            onChange={onChange}
            value={releaseDate}
          />
          <FormLabel mt={4}>가격(₩)</FormLabel>
          <Input
            name="price"
            placeholder="가격을 입력해주세요."
            onChange={onChange}
            value={price}
          />
        </FormControl>

        <UploadActionButtons onSubmit={onSubmit} onCancel={onCancel} />
      </Box>
    </Flex>
  );
};

export default UploadProductPage;
