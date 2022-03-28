import React from 'react';
import styled from 'styled-components';

const TermsConditions = ({ data, onChange }) => {
  const { content, select } = data;

  return (
    <TermsConditionsWrapper>
      <CheckBox checked={select} onChange={onChange} />
      <Agree>{content}</Agree>
    </TermsConditionsWrapper>
  );
};

const TermsConditionsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 0px 14px 0px;
`;

const CheckBox = styled.input.attrs({
  type: 'checkbox',
})`
  width: 24px;
  height: 24px;
  border: 20px solid #b7b7b7;
`;

const Agree = styled.div`
  padding-left: 10px;
  font-size: 16px;
`;

export default TermsConditions;
