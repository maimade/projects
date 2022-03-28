import React from 'react';
import styled from 'styled-components';
import ContentList from './ContentList/ContentList';
import ContentPrice from './ContentPrice/ContentPrice';

const CartContent = ({
  products,
  handleAdd,
  handleSubstract,
  handleChecked,
  checkedItems,
  handleFetchPlus,
  handleFetchMinus,
  handleFetchChecked,
  handleFetchEmpty,
}) => {
  return (
    <ContentContainer>
      <ContentInner>
        <ContentTitle>정기구독 제품</ContentTitle>
        <ContentList
          products={products}
          checkedItems={checkedItems}
          handleAdd={handleAdd}
          handleSubstract={handleSubstract}
          handleChecked={handleChecked}
          handleFetchPlus={handleFetchPlus}
          handleFetchMinus={handleFetchMinus}
          handleFetchChecked={handleFetchChecked}
          handleFetchEmpty={handleFetchEmpty}
        />
        <ContentPrice products={products} />
      </ContentInner>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  margin-bottom: 50px;
`;

const ContentInner = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 0 137px;
`;

const ContentTitle = styled.p`
  margin-top: 20px;
  padding: 20px 0;
  font-size: 20px;
  font-weight: 700;
`;

export default CartContent;
