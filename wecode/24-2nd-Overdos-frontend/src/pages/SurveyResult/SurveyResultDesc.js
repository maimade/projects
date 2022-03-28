import React from 'react';
import styled from 'styled-components';
import RecommendFoodContentList from './RecommendFoodContentList';

const SurveyResultDesc = ({ surveyResult }) => {
  console.log(surveyResult);

  return (
    <SurveyResultDescWrapper>
      {surveyResult.length && (
        <>
          {surveyResult.map((data, index) => {
            return (
              <div key={index}>
                <DescContent>
                  <PillName>{data.product_name}</PillName>
                  {data.summary.map((summary, index) => {
                    return <PillDesc>{summary}</PillDesc>;
                  })}
                </DescContent>
                <RecommendFood>
                  <RecommendFoodTitle>추천식품정보</RecommendFoodTitle>
                  <RecommendFoodContentList foodList={data.food} />
                </RecommendFood>
              </div>
            );
          })}
        </>
      )}
    </SurveyResultDescWrapper>
  );
};

export default SurveyResultDesc;

const SurveyResultDescWrapper = styled.div`
  margin-left: 234px;
`;

const DescContent = styled.div`
  padding: 30px 40px;
  width: 790px;
  height: 210px;
`;

const PillName = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 10px;
`;

const PillDesc = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin: 2px 0px;
`;

const RecommendFood = styled.div`
  padding: 30px 40px;
  height: 310px;
  background-color: white;
`;

const RecommendFoodTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
`;
