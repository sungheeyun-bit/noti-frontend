import React from 'react';
import styled from 'styled-components';
import { SlBell } from 'react-icons/sl';
import {
  Box,
  Image,
  AspectRatio,
  Container,
  Link,
  Text,
  IconButton,
  Badge,
} from '@chakra-ui/react';
import moment from 'moment';

const IconBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
`;

const ProductItem = ({ product, alarmHandler }) => {
  let releaseDay = moment(product.releaseDate).format('YYYY.MM.DD');

  return (
    <Container maxW="md">
      <Box maxW="s" borderWidth="1px" borderRadius="3xl" overflow="hidden">
        <AspectRatio maxW="400px" ratio={4 / 3}>
          <Link href={`/product/${product._id}`}>
            <Image src={product.images[0]} objectFit="cover" alt="product" />
          </Link>
        </AspectRatio>
        <Badge borderRadius="full" px="2" mt="4" ml="3" colorScheme="red">
          {product.brand}
        </Badge>

        <IconBlock>
          <Text fontSize="lg" fontWeight="semibold">
            {releaseDay} 발매
          </Text>
          <IconButton
            ml="10"
            icon={<SlBell />}
            size="md"
            variant="outline"
            isRound="true"
            onClick={() => alarmHandler(product._id)}
          />
        </IconBlock>

        <Box mb="2" ml="3" width="200px">
          {product.engProductName}
        </Box>
        <Box mb="4">
          <Link ml="3" href={`/product/${product._id}`} color="gray">
            상세정보 확인하기
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductItem;
