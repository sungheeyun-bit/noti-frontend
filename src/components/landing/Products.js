import React from 'react';
import ProductItem from './ProductItem';
import styled from 'styled-components';
import SearchBox from './SearchBox';
import { SimpleGrid, Button } from '@chakra-ui/react';

const ProductsWrappr = styled.div`
  margin: 2rem auto;
  width: 70%;
`;

const ProductListBlock = styled.div`
  width: 100%;
  margin: 2rem auto;
`;

const Title = styled.div`
  font-size: 2em;
  font-weight: 700;
  margin: 2rem auto;
  text-align: left;
  opacity: 0.8px;
  h6 {
    font-size: 19px;
    font-weight: lighter;
    color: gray;
  }
`;

const MoreLoadedBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`;

const Products = ({
  products,
  alarmHandler,
  updateSearchTerm,
  loadMoreHanlder,
  limit,
  postSize,
}) => {
  return (
    <ProductsWrappr id="products">
      <SearchBox updateSearchTerm={updateSearchTerm} />
      <Title>
        Upcoming Release <h6>발매 예정</h6>
      </Title>
      <ProductListBlock>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={19}>
          {products && (
            <>
              {products.map((product) => (
                <ProductItem
                  product={product}
                  key={product._id}
                  alarmHandler={alarmHandler}
                />
              ))}
            </>
          )}
        </SimpleGrid>
      </ProductListBlock>

      {postSize >= limit && (
        <MoreLoadedBlock>
          <Button
            variant="outline"
            onClick={loadMoreHanlder}
            rounded="40"
            width="110px"
            color="gray.500"
            letterSpacing="3px"
            fontWeight="300"
          >
            MORE
          </Button>
        </MoreLoadedBlock>
      )}
    </ProductsWrappr>
  );
};

export default Products;
