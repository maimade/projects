import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import MenuTitle from '../CommonComponent/MenuTitle';
import NoContent from '../CommonComponent/NoContent';

const HealthSurvey = () => {
  const [contentList, setContentList] = useState([]);

  const history = useHistory();

  useEffect(() => {
    fetch('http://10.58.2.22:8000/survey/resultlist', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('user_token'),
      },
    })
      .then(response => response.json())
      .then(response => {
        setContentList(response.Result);
      });
  }, []);

  const goSurveyResult = id => {
    history.push(`/surveyresult/${id}`);
  };

  const isContentEmpty = contentList.length;

  return (
    <>
      <MenuTitle title={'건강설문관리'} />
      {isContentEmpty ? (
        <>
          {contentList.map(data => (
            <SurveyContent
              key={data.id}
              onClick={() => goSurveyResult(data.id)}
            >
              <SurveyDate>{data.created_at.substring(0, 10)}</SurveyDate>
              <RecommendedProducts>
                {data.product_name.join(' ')}
              </RecommendedProducts>
            </SurveyContent>
          ))}
        </>
      ) : (
        <NoContent listName={'건강설문'} />
      )}
    </>
  );
};

export default HealthSurvey;

const SurveyContent = styled.div`
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

const SurveyDate = styled.div`
  font-size: 14px;
  color: #848484;
`;

const RecommendedProducts = styled.div`
  margin-top: 4px;
  font-size: 20px;
`;
