import React, { useEffect, useState } from 'react';
import DetailProduct from '../../components/product/DetailProduct';
import { useParams } from 'react-router-dom';
import { addToAlarm } from '../../lib/api/alarm';
import { detailProduct } from '../../lib/api/products';
import { useToast } from '@chakra-ui/react';

const DetailProductContainer = () => {
  const { productId } = useParams();
  const [Product, setProduct] = useState('');
  const [Error, setError] = useState('');
  const toast = useToast();

  useEffect(() => {
    getProduct(productId);
  }, []);

  const getProduct = async (productId) => {
    try {
      const product = await detailProduct(productId);
      setProduct(product.data);
    } catch (e) {
      setError(e);
    }
  };

  const showToast = (title, status, position, duration, isClosable) => {
    toast({ title, status, position, duration, isClosable });
  };

  const alarmHandler = async (product) => {
    const body = product;
    try {
      await addToAlarm(body);
      showToast('알람이 등록되었습니다.', 'success', 'top', 2000, true);
    } catch (e) {
      if (e.response.status === 409) {
        showToast('이미 등록된 알람입니다.', 'error', 'top', 2000, true);
      } else if (e.response.status === 401) {
        showToast('로그인이 필요합니다', 'info', 'top', 2000, true);
      }
    }
  };

  return (
    <DetailProduct
      product={Product}
      error={Error}
      alarmHandler={alarmHandler}
    />
  );
};

export default DetailProductContainer;
