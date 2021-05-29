import React from 'react';
import { SortPopup, SearchForm } from './index';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  display: flex;
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
