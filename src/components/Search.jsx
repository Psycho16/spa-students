import React from 'react';
import { SortPopup, SearchForm } from './index';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  display: flex;
  margin-bottom: 36px;
`;

function Search() {
  return (
    <SearchWrapper>
      <SearchForm />
      <SortPopup />
    </SearchWrapper>
  );
}

export default Search;
