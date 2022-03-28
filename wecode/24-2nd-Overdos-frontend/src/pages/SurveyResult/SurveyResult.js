import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SurveyResultAside from './SurveyResultAside';
import SurveyResultDesc from './SurveyResultDesc';
import { SURVEY_RESULT_DETAIL_API } from 'config';

const SurveyResult = () => {
  const [surveyResult, setSurveyResult] = useState({});

  useEffect(() => {
    fetch(`${SURVEY_RESULT_DETAIL_API}1`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('user_token'),
      },
    })
      .then(response => response.json())
      .then(response => {
        setSurveyResult(response.Result);
      });
  }, []);

  return (
    <SurveyResultWrapper>
      <SurveyResultContent>
        <SurveyResultAside surveyResult={surveyResult} />
        <SurveyResultDesc surveyResult={surveyResult} />
      </SurveyResultContent>
    </SurveyResultWrapper>
  );
};

export default SurveyResult;

const SurveyResultWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 90px;
  background-color: #f2f2f2;
`;

const SurveyResultContent = styled.div`
  width: 1024px;
  background-color: pink;
`;
