import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { color } from 'styles/color';
import CustomerReview from './CustomerReview/CustomerReview';
import { REVIEW_API } from 'config';

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(REVIEW_API)
      .then(res => res.json())
      .then(res => {
        setReviews(res.REVIEWS_LIST);
      });
  }, []);

  return (
    <Container>
      <Inner>
        <Title>고객리뷰</Title>
        <SubTitle>
          필리를 이용해주신 고객님들의 리얼후기
          <ReviewCount> 4,059건</ReviewCount>을 확인하세요!
        </SubTitle>
        <CustomerReview reviews={reviews} />
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 100px;
  background: #f2f2f2;
`;

const Inner = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 130px 50px 0;
`;

const Title = styled.p`
  font-size: 26px;
`;

const SubTitle = styled.p`
  margin-top: 37px;
  font-size: 16px;
  color: ${color.DARKGRAY};
`;

const ReviewCount = styled.strong`
  font-weight: 700;
  color: #6ad643;
`;

export default Review;
