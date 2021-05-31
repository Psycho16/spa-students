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
      <SortPopup
        items={[
          'Имя А-Я',
          'Имя Я-А',
          'Сначала моложе',
          'Сначала старше',
          'Высокий рейтинг',
          'Низкий рейтинг',
        ]}
      />
    </SearchWrapper>
  );
}

export default Search;
