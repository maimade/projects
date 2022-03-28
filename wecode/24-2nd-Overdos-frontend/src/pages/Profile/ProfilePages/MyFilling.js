import React from 'react';
import styled from 'styled-components';
import { MY_FILLING_MENU_DATA } from '../data';

const MyFilling = () => {
  return (
    <MyFillingWrapper>
      <UserInfo>
        <Name>위코드</Name> 님의 필리
        <Email>wecode@wecode.com</Email>
      </UserInfo>
      {MY_FILLING_MENU_DATA.map(data => (
        <MyFillingMenu key={data.id}>
          <Menu>{data.menu}</Menu>
          <SeeMore>더보기 &#62;</SeeMore>
        </MyFillingMenu>
      ))}
    </MyFillingWrapper>
  );
};

export default MyFilling;

const MyFillingWrapper = styled.div`
  width: 100%;
  height: 56px;
`;

const UserInfo = styled.div`
  font-size: 25px;
  font-weight: 300;
`;

const Name = styled.span`
  font-weight: 700;
`;

const Email = styled.div`
  font-size: 12px;
  color: #999999;
`;

const MyFillingMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  border-top: 7px solid #fafafa;
`;

const Menu = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const SeeMore = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #999999;
  cursor: pointer;
`;
