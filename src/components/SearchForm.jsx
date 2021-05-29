import React from 'react';
import styled from 'styled-components';
import searchIcon from '../assets/search.svg';
const FormSearch = styled.form`
  position: relative;
  width: 83%;
  height: 48px;
  margin-right: 20px;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  @media ${(props) => props.theme.media.phone} {
    width: 63%;
  }
`;
const SearchBar = styled.input`
  width: 100%;
  height: 45px;
  /* padding: 0 0 0 55px; */
  padding-left: 55px;
  border: 1px solid transparent;
  opacity: 0.3;
  :focus {
    border: 1px solid ${(props) => props.theme.colors.primary};
    outline: none;
  }
  @media ${(props) => props.theme.media.phone} {
    /* width: 266px; */
  }
`;
const SearchIcon = styled.img`
  position: absolute;
  width: 18.52px;
  top: 31.25%;
  left: 20px;
`;
function SearchForm() {
  return (
    <>
      <FormSearch>
        <SearchBar type="text" placeholder="Поиск по имени" />
        <SearchIcon src={searchIcon} />
      </FormSearch>
    </>
  );
}

export default SearchForm;
