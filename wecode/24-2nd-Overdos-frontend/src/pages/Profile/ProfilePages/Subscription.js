import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MenuTitle from '../CommonComponent/MenuTitle';
import NoContent from '../CommonComponent/NoContent';

const Subscription = () => {
  const [subScriptionList, setSubScriptionList] = useState([]);
  useEffect(() => {
    //데이터 fetch
    setSubScriptionList([]);
  }, []);

  const valueCheck = Object.keys(subScriptionList).length;

  return (
    <>
      <MenuTitle title={'정기구독'} />
      {valueCheck ? (
        <NoContent listName={'정기구독'} />
      ) : (
        <SubScriptionList>정기구독</SubScriptionList>
      )}
    </>
  );
};

export default Subscription;

const SubScriptionList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 95px;
  margin-top: -1px;
  font-size: 16px;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  cursor: pointer;
`;
