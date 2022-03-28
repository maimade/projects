import React from 'react';
import styled from 'styled-components';

const SurveyResultAside = ({ surveyResult }) => {
  const { length } = surveyResult;

  return (
    <SurveyResultAsideWrapper>
      {length && (
        <>
          <SurveyResultAsideTitle>
            추천영양성분 <PillsCount>{length}</PillsCount>
          </SurveyResultAsideTitle>
          {surveyResult.map((data, index) => {
            return (
              <Pills key={index}>
                <PillsImage src={data.image} />
                {data.product_name}
              </Pills>
            );
          })}
        </>
      )}
    </SurveyResultAsideWrapper>
  );
};

export default SurveyResultAside;

const SurveyResultAsideWrapper = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  width: 234px;
  height: 100%;
  background-color: white;
`;

const SurveyResultAsideTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65px;
  border-bottom: 1px solid #dddddd;
  font-size: 16px;
  font-weight: 700;
`;

const Pills = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  font-size: 13px;
`;

const PillsImage = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 10px;
  border: 1px solid #dddddd;
  border-radius: 50%;
`;

const PillsCount = styled.div`
  padding-left: 5px;
  color: #ff5c36;
`;
