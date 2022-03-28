import React from 'react';
import styled from 'styled-components';

const RecommendFoodContentList = ({ foodList }) => {
  return (
    <RecommendFoodContentListWrapper>
      {foodList.map((food, index) => {
        return (
          <RecommendFoodContent key={index}>
            <RecommendFoodImage src={food.url} />
            {console.log(food.url)}
            <RecommendFoodName>{food.name}</RecommendFoodName>
            <DailyDose>{food.daily_dose}</DailyDose>
            {food.feature.map((data, index) => {
              return <FoodFeature key={index}>{data.name}</FoodFeature>;
            })}
          </RecommendFoodContent>
        );
      })}
    </RecommendFoodContentListWrapper>
  );
};

export default RecommendFoodContentList;

const RecommendFoodContentListWrapper = styled.div`
  display: flex;
`;

const RecommendFoodContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 167px;
  height: 210px;
`;

const RecommendFoodImage = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 10px;
  border-radius: 50%;
`;

const RecommendFoodName = styled.div`
  font-size: 18px;
`;

const DailyDose = styled.div`
  margin: 2px 0px;
  color: #cccccc;
  font-size: 12px;
`;

const FoodFeature = styled.div`
  font-size: 12px;
`;
