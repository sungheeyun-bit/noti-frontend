import client from './client';

export const uploadProduct = ({
  brand,
  productName,
  engProductName,
  brandPage,
  price,
  releaseDate,
  images,
}) =>
  client.post('api/products/upload', {
    brand,
    productName,
    engProductName,
    brandPage,
    price,
    releaseDate,
    images,
  });

export const detailProduct = (id) => client.get(`/api/products/detail/${id}`);

export const listProducts = (body) =>
  client.post(`/api/products/productList`, body);
