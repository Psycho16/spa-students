import React from 'react';
import sort from '../assets/sort.svg';
import styled from 'styled-components';

const Sort = styled.div`
  position: relative;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  width: 15px;
  height: 48px;
`;
const SortLabel = styled.div`
  display: flex;
  align-items: center;
  width: 15px;
  height: 48px;
`;
const SortSpan = styled.span`
  margin-left: 20px;
  margin-right: 71px;
  cursor: pointer;
  @media ${(props) => props.theme.media.phone} {
    display: none;
  }
`;
const SortPop = styled.div`
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgb(0 0 0 / 9%);
  border-radius: 10px;
  overflow: hidden;
  width: 160px;
`;
const SortUl = styled.ul`
  overflow: hidden;
  font-size: 12px;
  line-height: 15px;
`;
const SortLi = styled.li`
  width: 100%;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 12px;
  line-height: 15px;
  list-style-type: none;
  :active,
  :hover {
    background: rgba(73, 194, 232, 0.11);
    border-radius: 5px;
  }
`;

function SortPopup() {
  return (
    <Sort>
      <SortLabel>
        <SortSpan>Имя Я-А</SortSpan>
        <img src={sort} alt="sort-icon"></img>
      </SortLabel>
      <SortPop>
        <SortUl>
          <SortLi>Имя А-Я</SortLi>
          <SortLi>Имя Я-А</SortLi>
          <SortLi>Сначала моложе</SortLi>
          <SortLi>Сначала старше</SortLi>
          <SortLi>Высокий рейтинг</SortLi>
          <SortLi>Низкий рейтинг</SortLi>
        </SortUl>
      </SortPop>
    </Sort>
  );
}

export default SortPopup;
