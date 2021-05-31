import React from 'react';
import sort from '../assets/sort.svg';
import styled from 'styled-components';

const Sort = styled.div`
  position: relative;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
`;
const SortLabel = styled.div`
  display: flex;
  align-items: center;
  padding-right: 17px;
  padding-left: 20px;
  width: 15%;
  height: 48px;
  @media ${(props) => props.theme.media.phone} {
    width: 100%;
    padding-right: 0;
  }
`;
const SortSpan = styled.span`
  /* margin-left: 20px; */
  margin-right: 71px;
  cursor: pointer;
  @media ${(props) => props.theme.media.phone} {
    display: none;
  }
`;
const SortLogo = styled.img`
  width: 20px;
  height: 18px;
  @media ${(props) => props.theme.media.phone} {
    width: 100%;
  }
`;
const SortPop = styled.div`
  /* display: none; */
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

function SortPopup({ items }) {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);
  const sortRef = React.useRef();
  function toggleVisiblePopup() {
    setVisiblePopup(!visiblePopup);
  }
  const activeLabel = items[activeItem];

  function handleOutsideClick(e) {
    if (!e.path.includes(sortRef.current)) setVisiblePopup(false);
  }

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);
  return (
    <Sort onClick={toggleVisiblePopup} ref={sortRef}>
      <SortLabel>
        <SortSpan>{activeLabel}</SortSpan>
        <SortLogo src={sort} alt="sort-icon"></SortLogo>
      </SortLabel>
      {visiblePopup ? (
        <SortPop>
          <SortUl>
            {items
              ? items.map((name, index) => (
                  <SortLi
                    key={name}
                    onClick={() => {
                      setActiveItem(index);
                    }}
                  >
                    {name}
                  </SortLi>
                ))
              : ''}
          </SortUl>
        </SortPop>
      ) : (
        ''
      )}
    </Sort>
  );
}

export default SortPopup;
