import React from 'react';
import styled from 'styled-components';
import MenuTitle from '../CommonComponent/MenuTitle';
import { MEMBER_INFO_LIST_DATA } from '../data';

const Member = () => {
  return (
    <>
      <MenuTitle title={'회원관리'} />
      {MEMBER_INFO_LIST_DATA.map(data => (
        <MemberInfo key={data.id}>
          <MemberInfoTitle>{data.title}</MemberInfoTitle>
          <MemberInfoContent>{data.title}</MemberInfoContent>
          <ChangeInfoButton>{data.button} 변경</ChangeInfoButton>
        </MemberInfo>
      ))}
    </>
  );
};

export default Member;

const MemberInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  border-bottom: 1px solid #eeeeee;
`;

const MemberInfoTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const MemberInfoContent = styled.div`
  font-size: 16px;
  width: 50%;
`;

const ChangeInfoButton = styled.button`
  height: 50px;
  width: 212px;
  font-size: 16px;
  font-weight: 700;
  color: #999999;
  border: 2px solid #eeeeee;
  border-radius: 25px;
  cursor: pointer;
`;
