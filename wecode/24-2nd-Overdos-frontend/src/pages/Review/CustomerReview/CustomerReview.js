import React from 'react';
import styled from 'styled-components';
import { color } from 'styles/color';

const CustomerReview = props => {
  const { reviews } = props;

  return (
    <>
      <ReviewUl>
        {reviews.map(review => (
          <ReviewLi key={review.id}>
            <ReviewHeader>
              <ReviewName>
                {`${review.name.slice(0, 1)}**`}
                <ReviewProducts>{` (${review.products})`}</ReviewProducts>
              </ReviewName>
              <ReviewDate>
                {`${review.date} / `}
                <span calssName="duration">{review.duration}</span>
              </ReviewDate>
            </ReviewHeader>
            <ReviewImage src={review.image} />
            <ReviewContents>
              <ReviewDescription>{review.description}</ReviewDescription>
            </ReviewContents>
            <ReviewMore>
              <ReviewMoreWord>더 보기</ReviewMoreWord>
            </ReviewMore>
          </ReviewLi>
        ))}
      </ReviewUl>
    </>
  );
};

const ReviewUl = styled.ul`
  display: inline-flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ReviewLi = styled.li`
  width: 294px;
  margin-top: 50px;
  background: ${color.WHITE};
  overflow: hidden;
  border: 1px solid ${color.LIGHTGRAY};
  border-radius: 6px 6px 0 0;
  box-shadow: 0px 2px 3px 0 rgb(0 0 0 / 8%);
`;

const ReviewHeader = styled.div`
  padding: 24px 20px;
`;

const ReviewName = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
  font-weight: 700;
`;

const ReviewProducts = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

const ReviewDate = styled.span`
  float: right;
  margin-top: 8px;
  font-size: 12px;
`;

const ReviewImage = styled.img`
  margin-top: 14px;
  width: 100%;
  background-size: cover;
`;

const ReviewContents = styled.div`
  height: 100px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding: 0 12px;
`;

const ReviewDescription = styled.p`
  margin-top: 20px;
  padding: 0 10px;
  font-size: 12px;
  line-height: 20px;
`;

const ReviewMore = styled.div`
  margin: 15px 0;
  padding: 4px 22px 10px;
  color: ${color.ORANGE};
  cursor: pointer;
`;

const ReviewMoreWord = styled.span`
  font-size: 12px;
  font-weight: 700;
  border-bottom: solid 1px ${color.ORANGE};
`;

export default CustomerReview;
