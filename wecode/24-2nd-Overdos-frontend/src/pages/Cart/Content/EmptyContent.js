import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StyledButton from 'components/CommonStyled/StyledButton';

const EmptyContent = () => {
  return (
    <Container>
      <EmptyImg src="/images/empty.png" />
      <EmptyTitle>장바구니에 추가된 제품이 없습니다.</EmptyTitle>
      <EmptySurvey>몇 가지 건강설문을 통해</EmptySurvey>
      <EmptySurvey>나만을 위한 영양성분을 찾아보세요.</EmptySurvey>
      <Link to="/survey">
        <EmptyButton>나만의 영양성분 찾기</EmptyButton>
      </Link>
    </Container>
  );
};

export default EmptyContent;

const Container = styled.div`
  padding: 120px 0px 50px;
`;

const EmptyImg = styled.img`
  display: block;
  width: 56px;
  margin: 0 auto;
`;

const EmptyTitle = styled.p`
  margin: 40px 0 25px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

const EmptySurvey = styled.p`
  text-align: center;
  font-size: 14px;
`;

const EmptyButton = styled(StyledButton)`
  display: block;
  margin: 60px auto;
  padding: 15px 36px;
`;
