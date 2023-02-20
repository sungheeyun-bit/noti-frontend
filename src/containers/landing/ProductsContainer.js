import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Products from '../../components/landing/Products';
import { addToAlarm } from '../../lib/api/alarm';
import { listProducts } from '../../lib/api/products';
import { useToast } from '@chakra-ui/react';

const ProductsContainer = () => {
  const [ProductList, setProductList] = useState([]);
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(4);
  const [PostSize, setPostSize] = useState(0);
  const [SearchTerm, setSearchTerm] = useState('');
  const toast = useToast();

  useEffect(() => {
    let body = {
      skip: Skip,
      limit: Limit,
    };
    getProducts(body);
  }, []);

  const getProducts = async (body) => {
    try {
      const products = await listProducts(body);
      if (body.loadMore) {
        setProductList([...ProductList, ...products.data.products]);
      } else {
        setProductList(products.data.products);
      }
      setPostSize(products.data.postSize);
    } catch (e) {
      console.log(e);
    }
  };

  const loadMoreHanlder = () => {
    let skip = Skip + Limit;
    let body = {
      skip: skip,
      limit: Limit,
      loadMore: true,
    };
    getProducts(body);
    setSkip(skip);
  };

  const updateSearchTerm = (newSearchTerm) => {
    let body = {
      skip: 0,
      limit: Limit,
      searchTerm: newSearchTerm,
    };
    setSkip(0);
    setSearchTerm(newSearchTerm);
    getProducts(body);
  };

  const showToast = (title, status, position, duration, isClosable) => {
    toast({ title, status, position, duration, isClosable });
  };

  const alarmHandler = async (productId) => {
    const body = ProductList.filter((product) => product._id === productId)[0];
    if (!user) {
      showToast('로그인이 필요합니다', 'info', 'top', 2000, true);
      return;
    }
    try {
      await addToAlarm(body);
      showToast('알람이 등록되었습니다.', 'success', 'top', 2000, true);
    } catch (e) {
      if (e.response.status === 409) {
        showToast('이미 등록된 알람입니다.', 'error', 'top', 2000, true);
      }
    }
  };

  return (
    <Products
      products={ProductList}
      alarmHandler={alarmHandler}
      updateSearchTerm={updateSearchTerm}
      loadMoreHanlder={loadMoreHanlder}
      limit={Limit}
      postSize={PostSize}
    />
  );
};

export default ProductsContainer;
