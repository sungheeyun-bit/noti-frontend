import React, { useState } from 'react';
import {
  Input,
  InputGroup,
  InputRightElement,
  Tooltip,
} from '@chakra-ui/react';
import { BiSearchAlt } from 'react-icons/bi';

const SearchBox = ({ updateSearchTerm }) => {
  const [SearchTerm, setSearchTerm] = useState('');

  const searchHandler = (e) => {
    setSearchTerm(e.currentTarget.value);
    updateSearchTerm(e.currentTarget.value);
  };

  return (
    <>
      <Tooltip label="원하는 제품을 검색해 보세요!" placement="bottom-end">
        <InputGroup variant="filled" justifyContent="flex-end">
          <InputRightElement
            pointerEvents="none"
            children={<BiSearchAlt />}
            color="gray.600"
          />
          <Input
            width="280px"
            placeholder="예) nike"
            onChange={searchHandler}
            value={SearchTerm}
          />
        </InputGroup>
      </Tooltip>
    </>
  );
};

export default SearchBox;
