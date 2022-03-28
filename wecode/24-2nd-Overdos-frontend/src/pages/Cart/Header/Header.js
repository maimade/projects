import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color } from 'styles/color';

const Header = ({ handleEmpty, handleFetchEmpty }) => {
  return (
    <>
      <HeaderTop />
      <HeaderContainer>
        <HeaderWrapper>
          <HeaderNav>건강설문</HeaderNav>
          <DottedLines />
          <HeaderNav>영양추천</HeaderNav>
          <DottedLines />
          <HeaderNavCart>장바구니</HeaderNavCart>
          <DottedLinesGray />
          <HeaderNavGray>주문완료</HeaderNavGray>
        </HeaderWrapper>
        <HeaderWrapperCart>
          <HeaderTitle>장바구니</HeaderTitle>
          <Link to="/detail">
            <HeaderAdd>
              <i className="fas fa-plus"></i> 제품추가
            </HeaderAdd>
          </Link>
          <HeaderDelete
            onClick={() => {
              handleEmpty();
              handleFetchEmpty();
            }}
          >
            <i className="far fa-trash-alt"></i>
          </HeaderDelete>
        </HeaderWrapperCart>
      </HeaderContainer>
    </>
  );
};

const HeaderTop = styled.div`
  height: 64px;
  background: ${color.WHITE};
  border-bottom: 1px solid red;
`;

const HeaderWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin: 57px 0 34px 0;
`;

const HeaderContainer = styled.div``;

const HeaderNav = styled.p`
  color: ${color.ORANGE};
  font-size: 14px;
  font-weight: 700;
`;

const HeaderNavCart = styled(HeaderNav)`
  margin-top: -3px;
  font-size: 18px;
`;

const HeaderNavGray = styled(HeaderNav)`
  color: #9a9a9a;
`;

const DottedLines = styled.div`
  width: 85px;
  margin: 6px 10px 0;
  border-top: 2px dotted ${color.ORANGE};
`;

const DottedLinesGray = styled(DottedLines)`
  border-top: 3px dotted #9a9a9a;
`;

const HeaderWrapperCart = styled(HeaderWrapper)`
  margin: 0;
`;

const HeaderTitle = styled.p`
  margin: auto 510px auto 0;
  color: ${color.BLACK};
  font-size: 26px;
`;

const HeaderAdd = styled.button`
  border: 1px solid ${color.LIGHTGRAY};
  border-radius: 30px;
  padding: 10px 16px;
  color: ${color.DARKGRAY};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

const HeaderDelete = styled.button`
  margin-left: 12px;
  padding: 0 14px;
  border: 1px solid ${color.LIGHTGRAY};
  border-radius: 100%;
  color: ${color.DARKGRAY};
  font-size: 14px;
  cursor: pointer;
`;

export default Header;
