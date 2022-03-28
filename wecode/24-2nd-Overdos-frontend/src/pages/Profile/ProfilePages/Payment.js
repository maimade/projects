import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MenuTitle from '../CommonComponent/MenuTitle';
import NoContent from '../CommonComponent/NoContent';

const Payment = () => {
  const [paymentList, setPaymentList] = useState([]);
  useEffect(() => {
    //데이터 fetch
    setPaymentList([]);
  }, []);

  const valueCheck = Object.keys(paymentList).length;

  return (
    <>
      <MenuTitle title={'결제관리'} />
      {valueCheck ? (
        <NoContent listName={'결제 내역'} />
      ) : (
        <PaymentList>결제관리</PaymentList>
      )}
    </>
  );
};

export default Payment;

const PaymentList = styled.div`
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
