import React from 'react';
import styled from 'styled-components';

const SignUpInputBox = ({ validation, data, onChange }) => {
  const { title, name, placeholder, type, wrongValueMessage } = data;

  return (
    <>
      <InputName>{title}</InputName>
      <InputValue
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        validation={validation}
        autoComplete={type}
      />
      {validation && <WrongValueMessage>{wrongValueMessage}</WrongValueMessage>}
    </>
  );
};

const InputName = styled.div`
  margin-bottom: 7px;
  margin-top: 30px;
  font-size: 14px;
  font-weight: 700;
  color: #999999;
`;

const InputValue = styled.input`
  height: 60px;
  width: 100%;
  padding-left: 20px;
  border: ${props => {
    return props.validation ? '1px solid red' : '1px solid #b7b7b7';
  }};
  border-radius: 5px;
  font-size: 20px;
`;

const WrongValueMessage = styled.div`
  margin-top: 6px;
  font-size: 12px;
  color: red;
`;

export default SignUpInputBox;
