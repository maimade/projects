import React from 'react';
import styled from 'styled-components';
import { color } from 'styles/color';

const SurveyBar = ({ percent }) => {
  const realPercent = Math.max(0, Math.min(percent, 100));
  return (
    <div className="SurveyBar">
      <BarContainer>
        <ProgressBar percentage={realPercent} />
      </BarContainer>
    </div>
  );
};

const BarContainer = styled.div`
  width: calc(100% + 300px);
  transform: translateX(-150px);
  background: ${color.LIGHTGRAY};
`;

const ProgressBar = styled.div`
  width: ${props => props.percentage}%;
  height: 5px;
  background: ${color.ORANGE};
`;

export default SurveyBar;
