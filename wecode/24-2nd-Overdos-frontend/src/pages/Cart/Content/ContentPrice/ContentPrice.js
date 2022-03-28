import React from 'react';
import styled from 'styled-components';
import { color } from 'styles/color';
import StyledButton from 'components/CommonStyled/StyledButton';

const SHIPPING_FEE = 2500;

const ContentPrice = ({ products }) => {
  const PriceForPills = products.map(product => {
    if (product.checked) {
      return Object.values(product)[4] * product.quantity;
    } else return null;
  });

  const TotalForPills = PriceForPills.reduce((a, b) => a + b, 0);
  const TotalPriceTag = TotalForPills + SHIPPING_FEE;
  const PricePerDay = TotalPriceTag / 30;

  return (
    <CartPrice>
      <CartPriceProduct>
        <CartTotal>
          <CartTotalPTag>정기구독 제품합계</CartTotalPTag>
          <CartTotalPTag>{TotalForPills.toLocaleString()}원</CartTotalPTag>
        </CartTotal>
        <Shipping>
          <CartTotalPTag>배송비</CartTotalPTag>
          <CartTotalPTag>{SHIPPING_FEE.toLocaleString()}원</CartTotalPTag>
        </Shipping>
        <TotalPriceContainer>
          <TotalPriceTitle>총 결제금액</TotalPriceTitle>
          <TotalPrice>{TotalPriceTag.toLocaleString()}원</TotalPrice>
        </TotalPriceContainer>

        {TotalPriceTag !== SHIPPING_FEE && (
          <TotalPricePerDay>
            <Inner>
              <PerDayPTag>
                하루 {parseInt(PricePerDay).toLocaleString()}원!
              </PerDayPTag>
              <PerDayPTagInvest>건강에 투자하세요.</PerDayPTagInvest>
            </Inner>
          </TotalPricePerDay>
        )}
        <SubscribeBtn
          onClick={() => {
            alert('결제되었습니다.');
          }}
        >
          정기구독 시작하기
        </SubscribeBtn>
        <StopSubscribe>언제든 변경 및 해지 가능</StopSubscribe>
      </CartPriceProduct>
    </CartPrice>
  );
};

const CartPrice = styled.div``;

const CartPriceProduct = styled.div`
  margin-top: 10px;
  padding: 15px 0;
`;

const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Shipping = styled(CartTotal)`
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

const CartTotalPTag = styled.p`
  padding: 15px 0;
  font-size: 16px;
`;

const TotalPriceContainer = styled(CartTotal)`
  margin-top: 20px;
  border-top: 3px solid ${color.GRAY};
`;

const TotalPriceTitle = styled(CartTotalPTag)`
  margin-top: 20px;
  font-size: 22px;
  font-weight: 700;
`;

const TotalPrice = styled(CartTotalPTag)`
  margin-top: 20px;
  font-size: 22px;
  font-weight: 700;
  color: ${color.ORANGE};
`;

const TotalPricePerDay = styled.div`
  position: relative;
`;

const Inner = styled.div`
  position: absolute;
  right: 0;
  border: 1px solid ${color.LIGHTGRAY};
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 6%);
`;

const PerDayPTag = styled.p`
  padding: 20px 28px;
  font-size: 16px;
  font-weight: 700;
`;

const PerDayPTagInvest = styled(PerDayPTag)`
  margin-top: -20px;
  padding: 0 28px 20px;
  font-weight: 400;
`;

const SubscribeBtn = styled(StyledButton)`
  display: block;
  margin: 125px auto 0;
  padding: 20px 105px;
  font-size: 16px;
`;

const StopSubscribe = styled.p`
  margin-top: 20px;
  text-align: center;
  color: ${color.ORANGE};
  font-size: 14px;
`;

export default ContentPrice;
